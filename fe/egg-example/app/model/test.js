'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Test = app.model.define('test', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    url: STRING(30),
    text: STRING(30),
  },{
    timestamps: false,  //去除createAt updateAt
    freezeTableName: true,  //使用自定义表名
  });
  return Test;
};