<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <nav-bar/>
      </el-header>
      <el-main>
        <!--<keep-alive exclude="InformationList, Detail">-->
          <!--<router-view></router-view>-->
        <!--</keep-alive>-->

        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </el-main>

      <el-footer>
        <copyright/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import NavBar from 'components/content/NavBar'

  import Copyright from 'views/copyright/Copyright'

  import instance from './network/request'
  export default {
    name: 'App',
    components: {
      NavBar,
      Copyright
    },
    methods: {
      send() {
        console.log('1');
        instance({
          url: '/selectUserById/1'
        }).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>


<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    padding: 0;
    margin: 0;
    .header {
      background-color: $backColor;
      height: 60px;
      position: fixed;
      z-index: 99;
      width: 100%;
    }
    .el-main {
      padding: 2px 20px;
      margin-top: 60px;
      /*height: auto;*/
    }
  }
</style>
