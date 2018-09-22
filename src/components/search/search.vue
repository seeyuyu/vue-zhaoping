<template>
  

  <div class="banxin">
    <div>
    我是谁
  </div>
    <!--输入框  -->
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <!-- 输入框 -->
      <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <!-- 选择器 -->
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/base"
</style>
