<template>
  <div class="content-div" id="content" v-if="Object.keys(homePageInfo) != ''">
    <el-row type="flex" justify="center" :gutter="40" ref="elTabs">
      <el-col :span="13">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs-class" >
          <el-tab-pane name="first" >
            <span slot="label"><i class="el-icon-date"></i> {{$t('content.home')}}</span>
            <essay :pageInfo="homePageInfo" @currentChange="currentChange" @sizeChange="sizeChange"/>
          </el-tab-pane>
          <el-tab-pane :label="$t('content.enStory')" name="second" >
            <!--<essay :Informations="storyInfo"/>-->
          </el-tab-pane>
          <el-tab-pane :label="$t('content.moAnEvNews')" name="third">
            <!--<essay :Informations="dailyInfo"/>-->
          </el-tab-pane>
          <el-tab-pane :label="$t('content.chShow')" name="fourth">
            <!--<essay :Informations="showInfo"/>-->
          </el-tab-pane>
        </el-tabs>

        <!--<essay/>-->
      </el-col>
      <el-col :span="7">
        <recommend style="padding-top: 10px"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Essay from 'views/components/Essay'

  import Recommend from 'components/content/Recommend'

  import * as informationApi from 'api/information'
  export default {
    name: "Content",
    components: {
      Essay,
      Recommend
    },
    data() {
      return {
        activeName: 'first',
        homePageInfo: [],
        storyInfo: [],
        dailyInfo: [],
        showInfo: [],
        test: 0,
        offsetTop: 0
      };
    },
    mounted() {
      this.getData()
    },
    updated() {
      this.offsetTop = this.$refs.elTabs.$el.offsetTop
      // console.log(this.offsetTop);
    }
    ,
    methods: {
      handleClick(tab, event) {
      },
      //获得首页初始数据
      getData() {
        //获取所有资讯信息
        this.getSomeInfoByPage(1)
        //获取资讯类型为一的资讯信息
        informationApi.getInfoByType(1).then(res => {
          this.storyInfo = res
        })
        //获取资讯类型为二的资讯信息
        informationApi.getInfoByType(2).then(res => {
          this.dailyInfo = res
        })
        //获取资讯类型为一的资讯信息
        informationApi.getInfoByType(3).then(res => {
          this.showInfo = res
        })

      },
      //处理页面
      currentChange(page, size) {
        this.getSomeInfoByPage(page, size)
        this.backTop()
      },
      sizeChange(page, size) {
        // console.log('size ==' + size);
        this.getSomeInfoByPage(page, size)
        // this.backTop()
      },
      getSomeInfoByPage(page, size) {
        informationApi.getSomeInfoByPage(page, size).then(res => {
          this.homePageInfo = res
          // console.log(this.homePageInfo);
        }).catch(err => {
          console.log(err);
          this.$message("获取资讯数据超时，请重试！")
        })
      },
      backTop() {
        // console.log(this.$refs.elTabs.$el);
        // this.$nextTick(() => {
        //   this.$refs.DOM.scrollTo(0, this.offsetTop)
        // })
        // document.body.scrollTo(0, 100)
        // document.body.scrollTop = this.offsetTop


        // this.$nextTick(() => {
        //   this.$refs.DOM.scrollTo(0,200);
        // })

        document.getElementById("content").scrollIntoView();
        // document.getElementById("content").style.marginTop = "60px"
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-div {
    padding: 6px 0;

    .tabs-class {

      /deep/.el-tabs__content {
        overflow: initial;
      }
    }

  }
</style>