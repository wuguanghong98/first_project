<template>
  <div class="information-detail" :key="information.id">
    <content-layout>
      <div slot="left">
        <!--{{information}}-->
        <Title :information="information"/>
        <div v-html="information.content" class="information-content">
        </div>
      </div>
      <div slot="right">
        <recommend/>
      </div>
    </content-layout>
  </div>
</template>

<script>
  import Title from './child/Title'


  import {getInfoById} from 'api/information'

  import ContentLayout from 'components/content/ContentLayout'
  import Recommend from 'components/content/Recommend'


  export default {
    name: "Detail",
    components: {
      Title,
      ContentLayout,
      Recommend
    },
    data() {
      return {
        information: {}
      }
    },

    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.getInfo(this.$route.params.id)
      },
      getInfo(id) {
        getInfoById(id).then(res => {
          this.information = res
          // console.log(this.information);
        }).catch(err => {
          console.log(err);
          this.$message('获取资讯详情信息错误，请重试！')
        })
      }
    },
    watch: {
      $route(newV,oldV) {
        // console.log(newV);
        this.getInfo(newV.params.id)
      }
    },
    destroyed() {
      // console.log('d');
    }
  }
</script>

<style lang="scss" scoped>
  .information-detail {
    padding-top: 25px;

    .information-content {
      padding: 20px 0;
      /*border-bottom: #e0d7d7 solid 1px;*/
      font-size: 16px;
      line-height: 40px;
      color: #333;
      text-indent: 2em;
    }

  }
</style>