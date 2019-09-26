'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Test = app.model.define('test', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true ,primaryKey: true},
    url: STRING(30),
    text: STRING(30),
    // phone_id:{ type: INTEGER}
  },{
    // timestamps: false,  //去除createAt updateAt
    freezeTableName: true,  //使用自定义表名
  });
  Test.associate = function() {
    Test.belongsTo(app.model.Info);
    Test.belongsTo(app.model.Phone);
    
  }
  return Test;
};