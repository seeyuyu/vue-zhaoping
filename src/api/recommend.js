import jsonp from 'common/js/jsonp'
import {commonParams, option} from './config'

export function getRecommend(){
const url ='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?'
// es6的一个特性， 对象的合并，将所有的对象，合并到第一个参数里面
const data = Object.assign({},commonParams, {
    paltform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  // option 为jsonp 包里面的一个特有参数
  return jsonp(url, data, option)
} 