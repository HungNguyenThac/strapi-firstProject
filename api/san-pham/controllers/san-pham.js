"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async search(ctx) {
    console.log(ctx);
  },

  async phanloai(ctx) {
    let x = await strapi.query("sanPham").search({ _q: ctx.query.ten });
    return x;
  },
};
