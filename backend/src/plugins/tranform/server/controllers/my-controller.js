'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('tranform')
      .service('myService')
      .getWelcomeMessage();
  },
});
