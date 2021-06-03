"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async search(ctx) {
    let x = await strapi
      .query("product")
      .search({ _q: ctx.query.tenSP, _limit: 10 });

    return x;
  },
};
