<template>
  <div class="recommend" v-if="Object.keys(informationRecommends) != ''">
    <div class="recommend-title">
      <i class="el-icon-s-data"></i>
      {{$t('content.toRecommendation')}}
    </div>
    <div v-for="(information, index) in informationRecommends" :key="index" class="title" @click="jumpDetail(information.id)">
      <div class="index">{{index + 1}}</div>
      <div class="title-content">{{information.title}}</div>
    </div>
  </div>
</template>

<script>

  import {getInfoRecommend} from 'api/information'
  export default {
    name: "Recommend",
    data() {
      return {
        titles: []
      }
    },
    computed: {
      informationRecommends() {
        return this.titles
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        getInfoRecommend().then(res => {
          this.titles = res
          // console.log(this.informationRecommends);
        }).catch(err => {
          this.$message("获取推荐信息列表超时，请重试！")
          console.log(err);
        })
      },
      jumpDetail(id) {
        this.$router.push('/detail/' + id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommend {
    .recommend-title {
      font-size: 18px;
      color: #333333;
      i {
        color: #79BBFF;
      }
    }
    .title {
      cursor: pointer;
      height: 110px;
      display: flex;
      align-items: center;
      border-bottom: #B3D8FF 1px dashed;
      .index {
        width: 40px;
        height: 40px;
        background-color: #FF8B00;
        border-radius: 50%;
        line-height: 40px;
        color: white;
        text-align: center;
      }
      .title-content {
        margin-left: 6px;
        line-height: 110px;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 401px;
        overflow: hidden;
      }
    }
  }
</style>