const mysql = require('mysql')

const linksql = mysql.createConnection({
  host:  '92.38.130.18',
  user: 'root',
  password: '081d8d5df08a804c',
  database: 'sspanel'
})
linksql.connect();

let query = (sql, value) => {
  return new Promise((res, rej) => {
    linksql.query(sql , async (err, result) => {
      if(err){
        rej(err)
      }else{
        res(result)
      }
    })
  })
}
// let query = (sql, value) => {
//   return new Promise( (res, rej) => {
//     linksql.getConnection((err, connection) => {
//       if(err){
//         rej(err)
//       }else{
//         connection.query(sql, values, (row, err) => {
//           if(err){
//             rej(err)
//           }else{
//             res(row)
//           }
//           // 结束会话
//           connection.release()
//         })
//       }
//     })
//   })
// }
module.exports = query;