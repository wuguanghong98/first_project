<template>
  <div class="content-div">
    <el-row type="flex" justify="center" :gutter="40">
      <el-col :span="13">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs-class" >
          <el-tab-pane name="first">
            <span slot="label"><i class="el-icon-date"></i> 首页</span>
            <essay/>
          </el-tab-pane>
          <el-tab-pane label="创业故事" name="second" >
            <!--<essay/>-->
          </el-tab-pane>
          <el-tab-pane label="早晚报" name="third">
            <essay/>
          </el-tab-pane>
          <el-tab-pane label="人物秀" name="fourth">
            <essay/>
          </el-tab-pane>
        </el-tabs>

        <!--<essay/>-->
      </el-col>
      <el-col :span="7">
        <recommend/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Essay from './Essay'

  import Recommend from 'components/content/Recommend'
  export default {
    name: "Content",
    components: {
      Essay,
      Recommend
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-div {
    padding: 2px 0;

    .tabs-class {

      /deep/.el-tabs__content {
        overflow: initial;
      }
    }

  }
</style>