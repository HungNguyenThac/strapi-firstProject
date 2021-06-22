"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findDetail(ctx) {
    let data = await strapi
      .query("cart")
      .findOne({ user: ctx.params.userId }, ["list", "list.product"]); // chưa populate được
    console.log(data);
  },
};
