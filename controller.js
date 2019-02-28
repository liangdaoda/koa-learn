const fs = require('fs');
// 获取controllers目录下的所有文件
// 这里可以用sync是因为启动时只运行一次，不存在性能问题:

// // 处理每个过滤出来的JS文件
// for(var f of js_filis){
//   console.log(`process controller: ${f}...`)
//   // 导入js文件
//   let mapping = require(__dirname + '/controllers/' + f)
//   for(var url in mapping){
//     if(url.startsWith('GET')){
//       // 如果是GET请求
//       var path = url.substring(4)
//       router.get(path, mapping[url])
//       console.log(`register URL mapping ：GET ${path}`)
//     }else if(url.startsWith('POST')){
//       // 如果是POST请求
//       var path = url.substring(5)
//       router.post(path, mapping[url])
//       console.log(`register URL mapping : POST ${path}`)
//     }else{
//       // 无效的URL地址
//       console.log(`invalid URL : ${path}`)
//     }
//   }
// }

function addMapping(router, mapping) {
  for (var url in mapping) {
      if (url.startsWith('GET ')) {
          var path = url.substring(4);
          router.get(path, mapping[url]);
          console.log(`register URL mapping: GET ${path}`);
      } else if (url.startsWith('POST ')) {
          var path = url.substring(5);
          router.post(path, mapping[url]);
          console.log(`register URL mapping: POST ${path}`);
      } else {
          console.log(`invalid URL: ${url}`);
      }
  }
}

function addControllers(router ,dir) {
  var files = fs.readdirSync(__dirname + '/controllers');
  var js_files = files.filter((f) => {
      return f.endsWith('.js');
  });

  for (var f of js_files) {
      console.log(`process controller: ${f}...`);
      let mapping = require(__dirname + '/controllers/' + f);
      addMapping(router, mapping);
  }
}

module.exports = function(dir){
  let
    controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
    router = require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes();
}
