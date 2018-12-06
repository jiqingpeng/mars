'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('img_data', {
    // user: STRING(30),
    // imgurl: STRING(30),
    // text: STRING(30),
  });

  return User;
};