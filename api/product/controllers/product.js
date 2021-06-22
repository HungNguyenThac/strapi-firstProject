"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async search(ctx) {
    if (ctx.query.tenSP) {
      let x = await strapi.query("product").search({ _q: ctx.query.tenSP });

      return x;
    } else {
      return [];
    }
  },

  async searchByPhanLoai(ctx) {
    let y = ctx.query.phanLoai;
    console.log(y);
    let x = await strapi
      .query("product")
      .search({ _q: ctx.query.tenSP, phanLoai: y });

    return x;
  },
};
