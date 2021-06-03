"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async phanloai(ctx) {
    let x = await strapi.query("test").search({ _q: ctx.query.ten });
    return x;
  },
};
