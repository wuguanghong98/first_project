<template>
  <div>
    <el-row>
      <el-col :span="13" :offset="2">
        <slot name="left"></slot>
      </el-col>
      <el-col :span="7">
        <slot name="right"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ContentLayout"
  }
</script>

<style scoped>

</style>