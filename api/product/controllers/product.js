"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async search(ctx) {
    if (ctx.query.tenSP) {
      // let x = await strapi
      //   .query("product")
      //   .search({ _q: ctx.query.tenSP, _limit: 10 });
      // return x;

      const result = strapi
        .query("product")
        .model.find({ tenSP: { $regex: `.*${ctx.query.tenSP}.*` } });
      console.log(result);
      // const fields = result.map((entry) => entry.toObject());
      return result;
    } else {
      return "thiếu query tenSP và phanLoai";
    }
  },

  async searchByPhanLoai(ctx) {
    let y = ctx.query.phanLoai;
    let x = await strapi
      .query("product")
      .search({ _q: ctx.query.tenSP, phanLoai: y });

    return x;
  },
};
