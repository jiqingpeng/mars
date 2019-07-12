'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    // user: STRING(30),
    // imgurl: STRING(30),
    // text: STRING(30),
  },{
    timestamps: false,  //去除createAt updateAt
    freezeTableName: true,  //使用自定义表名
  });

  return User;
};