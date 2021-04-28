<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <nav-bar/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>f</el-footer>
    </el-container>
  </div>
</template>

<script>
  import NavBar from 'components/content/NavBar'
  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    padding: 0;
    margin: 0;
    .header {
      background-color: $backColor;
    }
    .el-main {
      padding: 2px 20px;
    }
  }
</style>
