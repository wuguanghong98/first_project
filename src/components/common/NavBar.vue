<template>
  <div>
    <el-row class="navbar-row" :style="navbarStyle">
      <el-col :span="2" :offset="2"><slot name="logo" >logo图</slot></el-col>
      <el-col :span="titleSpanV"><slot name="title">title</slot></el-col>
      <el-col :span="6" :offset="searchOffsetV"><slot name="search">search</slot></el-col>
      <el-col :span="profileSpanV" :offset="profileOffset"><slot name="profile">profile</slot></el-col>
      <el-col :span="1"><slot name="lang">切换语言</slot></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      height: {
        type: String,
        default: '49px'
      },
      titleSpan: {
        type: Number,
        default: 10
      },
      profileSpan: {
        type: Number,
        default: 2
      },
      profileOffset: {
        type: Number,
        default: 0
      }
    },
    computed: {
      navbarStyle() {
        return 'height: ' + this.height
      },
      titleSpanV() {
        return this.titleSpan
      },
      profileSpanV() {
        return this.profileSpan
      },
      searchOffsetV() {
        return 10 - this.titleSpan
      }
    }
  }
</script>
<style scoped lang="scss">
  //$color: red;
  .navbar-row {
    /*height: 57px;*/
    //background-color: $color;
    /*line-height: 57px;*/
  }
</style>