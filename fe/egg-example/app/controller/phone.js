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
    const { phone, pwd } = this.ctx.query;
    const phoneList = await ctx.model.Phone.findOne({
      'where': {'phone': phone}
    });
    console.log(phoneList)
    if(phoneList === null){
      ctx.body = {res:'手机号码错误',state:false}
    }else{
      if(phoneList.pwd === pwd){
        ctx.status = 201;
        ctx.body = {
          state:true,
          res:phoneList
        };
      }else{
        ctx.body = {res:'密码错误',state:false}
      }
      
    }
    
  }
  async show() {
    const ctx = this.ctx;
    const { phone, pwd } = this.ctx.query;
   

    const phoneList = await ctx.model.Phone.findOne({
      'where': {'phone': phone}
    });
    if(phoneList.length === 0){
      ctx.body = {res:'手机号码错误',state:false}
    }else{
      if(phoneList.pwd === pwd){
        ctx.status = 201;
        ctx.body = {
          state:true,
          res:phoneList
        };
      }else{
        ctx.body = {res:'密码错误',state:false}
      }
      
    }
    
  }
  async create() {
    const ctx = this.ctx;
    const { phone, pwd } = ctx.request.body;
    const state = await ctx.model.Phone.findOne({
      'where': {'phone': phone}
    });
    console.log(state)
    if(state !== null){
      ctx.body = {res:'此号码已被注册',state:false}
    }else{
      const Phone = await ctx.model.Phone.create({ phone, pwd });
      ctx.status = 201;
      ctx.body = {
        state:true,
        res:Phone
      };
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