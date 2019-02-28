var getuser = async (ctx, next) => {
  var linksql = require('../sql/index')
  var sql = 'SELECT * FROM `user` WHERE `id` = 10 ';
  var res = await linksql(sql)
  console.log(res)
  ctx.response.body = `<p> ${JSON.stringify(res)} </p>`
};

module.exports = {
  'GET /user': getuser
};