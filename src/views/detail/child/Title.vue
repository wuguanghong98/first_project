<template>
  <div class="title-div">
    <div class="title-top">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="top-left">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t('path.home')}}</el-breadcrumb-item>
        <el-breadcrumb-item >{{$t('path.detail')}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="warning">{{$t('button.collect')}}</el-button>
    </div>
    <div class="title-content">
      {{information.title}}
    </div>
    <div class="title-bottom">
      {{'admin   /   ' + getPublicationDate}}
    </div>
  </div>
</template>

<script>

  import {formatTime} from 'common/utile'

  export default {
    name: "Title",
    props: {
      information: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      getPublicationDate() {
        return formatTime(this.information.publicationdate, 'Y-M-D')
      }
    },
    mounted() {
      // console.log('d');
    }
  }
</script>

<style scoped lang="scss">
  .title-div {
    border-bottom: #e0d7d7 solid 1px;
    padding-bottom: 35px;
    .title-top {
      display: flex;
      justify-content: space-between;

    .top-left {
      font-size: 16px;
    }
    }

    .title-content {
      height: 180px;
      font-size: 30px;
      font-weight: bold;
      color: #444B44;
      line-height: 180px;
      text-align: center;
    }

    .title-bottom {
      padding-left: 20px;
      font-size: 14px;
      color: #f8079c;
    }
  }
</style>