<template>
  <div class="information-detail">
    <content-layout>
      <div slot="left">
        {{information}}
      </div>
      <div slot="right">
        <recommend/>
      </div>
    </content-layout>
  </div>
</template>

<script>

  import {getInfoById} from 'api/information'

  import ContentLayout from 'components/content/ContentLayout'
  import Recommend from 'components/content/Recommend'
  export default {
    name: "Detail",
    components: {
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
          console.log(this.information);
        }).catch(err => {
          console.log(err);
          this.$message('获取资讯详情信息错误，请重试！')
        })
      }
    },
    destroyed() {
      console.log('d');
    }
  }
</script>

<style lang="scss" scoped>
  .information-detail {
    padding-top: 25px;
  }
</style>