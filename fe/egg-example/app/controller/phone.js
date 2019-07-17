// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
class PhoneController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    let result = await this.app.model.Phone.findAll();
    ctx.body = result
    ctx.status = 201;
    
  }
  async show() {
    const ctx = this.ctx;
    const { phone, pwd } = ctx.request.body;
    const { id } = ctx.params;
    
    // let res = await ctx.model.Phone.findById(id)
    const state = await ctx.model.Phone.findOne({
      where: {id}
    });
    ctx.body = state
    // ctx.body = res
    // console.log(phone)
  }
  async new() {
    const ctx = this.ctx;
    const { phone, pwd } = ctx.query;
    console.log(ctx.query)
    const state = await ctx.model.Phone.findOne({
      where: {
        phone,
        pwd
      }
    });
    console.log(state)
    if(!state){
      ctx.status = 400;
      ctx.body = {res:'账号或密码不正确',status:false}
    }else{
      ctx.status = 201;
      ctx.body = {
        status:true,
        res:state
      };
    }
  }
  async create() {
    const ctx = this.ctx;
    const { phone, pwd } = ctx.request.body;
    const state = await ctx.model.Phone.findOne({
      where: {phone}
    });
   
    if(state !== null){
      ctx.status = 400;
      ctx.body = {res:'此号码已被注册',status:false}
    }else{
      const Phone = await ctx.model.Phone.create({ phone, pwd });
      ctx.status = 201;
      ctx.body = {
        status:true,
        res:Phone
      };
      const { id } = Phone;
      ctx.model.Info.create({ phone_id:id});
    }
  }
  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Test = await ctx.model.Phone.findById(id);
    if (!Test) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await Phone.update({ name, age });
    ctx.body = Phone;
  }

  // async destroy() {
  //   const ctx = this.ctx;
  //   const id = toInt(ctx.params.id);
  //   const user = await ctx.model.User.findById(id);
  //   if (!user) {
  //     ctx.status = 404;
  //     return;
  //   }

  //   await user.destroy();
  //   ctx.status = 200;
  // }
}

module.exports = PhoneController;