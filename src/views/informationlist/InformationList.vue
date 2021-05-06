<template>
  <div class="information-list" :key="currentType" v-if="Object.keys(pageInfo) != ''">
    <content-layout>
      <div slot="left">
        <essay :pageInfo="pageInfo"
               @currentChange="currentChange"
               @sizeChange="sizeChange"/>
      </div>
      <div slot="right">
        <recommend/>
      </div>
    </content-layout>
  </div>
</template>

<script>

  import Essay from 'views/components/Essay'

  import ContentLayout from 'components/content/ContentLayout'
  import Recommend from 'components/content/Recommend'

  import * as informationApi from 'api/information'
  export default {
    name: "InformationList",
    components: {
      Essay,
      ContentLayout,
      Recommend
    },
    data() {
      return {
        pageInfo: {},
        currentType: 0
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.currentType = this.$route.query.type
        // console.log(this.currentType);
        this.getSomeInfoByPage(1, 6, this.currentType)
      },
      getSomeInfoByPage(page, size, type){
        informationApi.getSomeInfoByPage(page, size, type).then(res => {
          this.pageInfo = res
        }).catch(err => {
          console.log(err);
          this.$message('获取资讯信息列表失败，请重试！')
        })
      },
      currentChange(val, size) {
        this.getSomeInfoByPage(val, size, this.currentType)
      },
      sizeChange(page, val) {
        this.getSomeInfoByPage(page, val, this.currentType)
      }
    },
    watch: {
      $route(newVal, oldVal) {
        // console.log(newVal);
        this.currentType = newVal.query.type
        this.getSomeInfoByPage(1, 6, this.currentType)
      }
    },
    destroyed() {
      // console.log('destroyed');
    }
  }
</script>

<style scoped>
  .information-list {
    padding-top: 15px;
  }
</style>