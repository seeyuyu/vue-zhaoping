<template>
  <div id="app">
    <m-header></m-header>
    <!-- <tab></tab> -->
    <div>推荐界面</div>
    <router-view></router-view>

  </div>
</template>

<script type='text/ecmascript-6'>
import MHeader from 'components/m-header/m-header'
import MFooter from 'components/m-footer/m-footer'


export default {
  'components' :{ 
    MHeader,
    MFooter
  }
}
</script>

<style scoped lang ="stylus" rel ="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app 
    color : $color-theme
</style>
