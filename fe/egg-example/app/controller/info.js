// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
class InfoController extends Controller {
  async index() {
    const ctx = this.ctx;
    let result = await this.app.model.Info.findAll({
        include: [
          {
            model: this.app.model.Phone
          } 
        ]
      });
      ctx.body = result
      // ctx.body = await ctx.model.Test.findAll();
      ctx.status = 201;
    }
  async show() {
    const ctx = this.ctx;
    const { id } = this.ctx.params;
    let Info = await ctx.model.Info.findById(
        id,
        {
            include: [
                {
                    model: this.app.model.Phone
                }
            ]
            
        }
    );
    ctx.body = {
    status:true,
        res:Info
    };
    ctx.status = 201;
  }
  async create() {
    const ctx = this.ctx;
    const { phone_id, nick, sex, head_url} = ctx.request.body;
    const info = await ctx.model.Info.create({ phone_id, nick, sex, head_url});
      ctx.status = 201;
      ctx.body = {
        state:true,
        res:info
      };
    }
  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    let result = await ctx.model.Info.findById(id);
    const { nick, sex, head_url} = ctx.request.body;
    console.log( nick, sex, head_url)
    await result.update({ nick, sex, head_url});
    ctx.status = 201;
      ctx.body = {
        state:true,
        res:result
      };
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

module.exports = InfoController;