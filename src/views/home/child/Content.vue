<template>
  <div class="content-div">
    <el-row type="flex" justify="center" :gutter="40">
      <el-col :span="13">
        <essay/>
      </el-col>
      <el-col :span="7">
        <recommend/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Essay from './Essay'

  import Recommend from 'components/content/Recommend'
  export default {
    name: "Content",
    components: {
      Essay,
      Recommend
    },
  }
</script>

<style lang="scss" scoped>
  .content-div {
    padding: 2px 0;
  }
</style>