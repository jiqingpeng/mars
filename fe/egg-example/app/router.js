'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.render);
  router.resources('users', '/users', controller.users);
  router.resources('info', '/info', controller.info);
  router.resources('test', '/test', controller.test);
  router.resources('phone', '/phone', controller.phone);
  // router.post('/post', controller.home.create);
};
