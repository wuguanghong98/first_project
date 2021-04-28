<template>
  <div class="recommend">
    <div class="recommend-title">
      <i class="el-icon-s-data"></i>
      今日推荐
    </div>
    <div v-for="(title, index) in titles" :key="index" class="title">
      <div class="index">{{index + 1}}</div>
      <div class="title-content">{{title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        titles: ['29名选手参加“时代新人说”演讲大赛',
          '中国临安狮子山攀岩节暨浙江省首届水上攀石大赛成功举办',
          '29名选手参加“时代新人说”演讲大赛',
          '中国临安狮子山攀岩节暨浙江省首届水上攀石大赛成功举办暨浙江省首届水上攀石大赛成功举',
          '29名选手参加“时代新人说”演讲大赛',
          '中国临安狮子山攀岩节暨浙江省首届水上攀石大赛成功举办',
          '29名选手参加“时代新人说”演讲大赛',
          '中国临安狮子山攀岩节暨浙江省首届水上攀石大赛成功举办',
          '29名选手参加“时代新人说”演讲大赛',
          '中国临安狮子山攀岩节暨浙江省首届水上攀石大赛成功举办']
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