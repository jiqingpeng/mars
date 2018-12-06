'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async render() {
    await this.ctx.render('index.html');
  }
  // async index() {
  //   this.ctx.body = 'hi, egg';
  // }
  // async create() {
  //   console.log(222)
  //   this.ctx.body = 'hi, egg';
  // }
}

module.exports = HomeController;
