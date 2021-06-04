module.exports = async function (ctx, next) {
  let find = await strapi.query("product").findOne({
    tenSP: ctx.request.body.tenSP,
    phanLoai: ctx.request.body.phanLoai,
    maSP: ctx.request.body.maSP,
    size: ctx.request.body.size,
  });
  if (find) {
    ctx.send({
      message: "san pham nay da ton tai",
      status: 200,
    });
  } else {
    return await next();
  }
};
