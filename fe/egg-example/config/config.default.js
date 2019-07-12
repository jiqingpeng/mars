'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543921470612_771';

  // add your config here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    host: '47.100.30.67',
    port: 3307,
    database: 'mysql',
    username: 'root',
    password: '654321',
  };
  config.security = {
    csrf: {
        enable: false,
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ['*']
};
config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
};
config.view = {
  mapping: {
    '.html': 'nunjucks',
  }
}
  return config;
};
