// app/controller/users.js
const Controller = require ('egg').Controller;

function toInt (str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt (str, 10) || 0;
}
class PhoneController extends Controller {
  async index () {
    const ctx = this.ctx;
    let {offset, limit, phone} = ctx.query;
    const where = {phone};
    offset = toInt (offset);
    limit = toInt (limit);
    let total = null;
    let result = null;
    if (JSON.stringify (where) === '{}') {
      total = (await this.app.model.Phone.findAll ({})).length;
      result = await this.app.model.Phone.findAll ({
        offset,
        limit,
      });
    } else {
      total = (await this.app.model.Phone.findAll ({
        where: {phone},
      })).length;
      result = await this.app.model.Phone.findAll ({
        offset,
        limit,
        where: {phone},
      });
    }

    ctx.body = {
      data: result,
      total,
    };
    ctx.status = 201;
  }
  async show () {
    const ctx = this.ctx;
    const {phone, pwd} = ctx.request.body;
    const {id} = ctx.params;

    // let res = await ctx.model.Phone.findById(id)
    const state = await ctx.model.Phone.findOne ({
      where: {id},
    });
    ctx.body = state;
    // ctx.body = res
    // console.log(phone)
  }
  async new () {
    const ctx = this.ctx;
    const {phone, pwd} = ctx.query;

    const state = await ctx.model.Phone.findOne ({
      where: {
        phone,
        pwd,
      },
    });

    if (!state) {
      ctx.status = 400;
      ctx.body = {res: '账号或密码不正确', status: false};
    } else {
      ctx.status = 201;
      ctx.body = {
        status: true,
        res: state,
      };
    }
  }
  async create () {
    const ctx = this.ctx;
    const {phone, pwd} = ctx.request.body;
    console.log (phone);
    const state = await ctx.model.Phone.findOne ({
      where: {phone},
    });
    console.log (state);
    if (state !== null) {
      ctx.status = 400;
      ctx.body = {res: '此号码已被注册', status: false};
    } else {
      const Phone = await ctx.model.Phone.create ({phone, pwd});
      ctx.status = 201;
      ctx.body = {
        status: true,
        res: Phone,
      };
      const {id} = Phone;
      ctx.model.Info.create ({phone_id: id});
    }
  }
  async update () {
    const ctx = this.ctx;
    const id = toInt (ctx.params.id);
    
    const result = await ctx.model.Phone.findById (id);
    const {pwd} = ctx.request.body;
    
    await result.update ({pwd});
    ctx.status = 201;
    ctx.body = {
      status: true,
      res: result,
    };
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const phone = await ctx.model.Phone.findByPk(id);
    if (!phone) {
      ctx.status = 404;
      return;
    }
    await phone.destroy();
    const info = await ctx.model.Info.findByPk(id);
    await info.destroy();
    ctx.status = 200;
    ctx.body = {
      status: true,
    }
  }
}
module.exports = PhoneController;
