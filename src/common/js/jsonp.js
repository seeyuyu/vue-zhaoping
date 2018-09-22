import originJSONP from 'jsonp'
// import {resolve, reject} from 'when';
export default function jsonp(url, data, option){
  // 如果url是没用？,那么我们加一个？,没问好我们加一个& 
  url+=( (url.indexOf('?') <0 ? '?' : '&' ) + param(data))
  return new Promise((resolve, reject) => {
      originJSONP(url, option, (err, data) => {
          if(!err){    //成功的时候
            resolve(data)
          } else{
            reject(err)
          }
      })
  })
}  
// 将url和data合并起来
function param(data) {
  let url =''
  for( var k in data){
    let value = data[k] !== undefined? data[k]:''
    // 编码URI组件 ,${}是es6的一种表达式
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 如果url存在，那么我们将第一个&符号去掉，然后返回，如果不存在，返回空字符串
  return url ? url.substring(1) : ''
}