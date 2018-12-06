'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.render);
  // router.resources('users', '/users', controller.users);
  router.resources('test', '/test', controller.test);
  // router.post('/post', controller.home.create);
};
