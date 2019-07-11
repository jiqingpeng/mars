// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class TestController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    let result = await this.app.model.Test.findAll({
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
    ctx.body ={aaa:1111}
    console.log(2)
    // ctx.body = await ctx.model.Test.findById(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { url, text } = ctx.request.body;
    const Test = await ctx.model.Test.create({ url, text });
    ctx.status = 201;
    ctx.body = Test;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Test = await ctx.model.Test.findById(id);
    if (!Test) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await Test.update({ name, age });
    ctx.body = Test;
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

module.exports = TestController;