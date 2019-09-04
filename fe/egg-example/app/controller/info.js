// app/controller/users.js
const Controller = require ('egg').Controller;

function toInt (str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt (str, 10) || 0;
}

function filterJson (data) {
  const json = {};
  for (item in data) {
    if (data[item]) {
      json[item] = data[item];
    }
  }
  return json;
}

class InfoController extends Controller {
  async index () {
    const ctx = this.ctx;
    let {offset, limit, sex, nick} = ctx.query;
    const where = filterJson ({sex, nick});
    
    offset = toInt (offset);
    limit = toInt (limit);
    let total = null;
    let result = null;
    if (JSON.stringify (where) === '{}') {
      total = (await this.app.model.Info.findAll ({})).length;
      result = await this.app.model.Info.findAll ({
        offset,
        limit,
        include: [
          {
            model: this.app.model.Phone
          }
        ]
      });
    } else {
      total = (await this.app.model.Info.findAll ({
        where: where,
      })).length;
      result = await this.app.model.Info.findAll ({
        offset,
        limit,
        where: where,
        include: [
        {
          model: this.app.model.Phone
        }
      ]
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
    const {id} = this.ctx.params;
    const Info = await ctx.model.Info.findById (id, {
      include: [
        {
          model: this.app.model.Phone,
        },
      ],
    });
    ctx.body = {
      status: true,
      res: Info,
    };
    ctx.status = 201;
  }
  async create () {
    const ctx = this.ctx;
    const {phone_id, nick, sex, head_url} = ctx.request.body;
    const info = await ctx.model.Info.create ({phone_id, nick, sex, head_url});
    ctx.status = 201;
    ctx.body = {
      state: true,
      res: info,
    };
  }
  async update () {
    const ctx = this.ctx;
    const id = toInt (ctx.params.id);
    const result = await ctx.model.Info.findById (id);
    const {nick, sex, head_url} = ctx.request.body;
    
    await result.update ({nick, sex, head_url});
    ctx.status = 201;
    ctx.body = {
      state: true,
      res: result,
    };
  }

  async destroy (id) {
    const ctx = this.ctx;
    await ctx.delete (id);
    ctx.status = 200;
  }
}

module.exports = InfoController;
