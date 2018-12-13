'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Phone = app.model.define('phone', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    phone: STRING(30),
    pwd: STRING(30),
  },{
    timestamps: false,  //去除createAt updateAt
    freezeTableName: true,  //使用自定义表名
  });
  return Phone;
};