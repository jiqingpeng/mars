'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Info = app.model.define('info', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true ,primaryKey: true},
    nick: STRING(30),
    sex: STRING(30),
    head_url: STRING(255),
},{
    freezeTableName: true,  //使用自定义表名
});
Info.associate = function() {
    Info.belongsTo(app.model.Phone);
}
return Info;
};