<template>
  <el-row>
    <el-col :span="2" :offset="20">
      <div class="profile-menu" @mousemove="ShowProfile" @mouseout="hiddenProfile">
        <div v-for="(menu, index) in menus" class="menu">{{menu}}</div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "ProfileMenu",
    data() {
      return {
        menus: ['个人中心', '发布资讯', '修改信息', '修改密码', '退出登录']
      }
    },

    mounted() {

      console.log(this.$parent.isShowProfile);
    },
    methods: {
      ShowProfile() {
        this.$parent.isShowProfile = true
      },
      hiddenProfile() {
        this.$parent.isShowProfile = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile-menu {
    @include marginLeft;
    z-index: 99;
    width: 90%;
    /*<!--background-color: $backColor;-->*/
    /*width: auto;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*align-items: center;*/
    position: relative;
    bottom: 8px;

    .menu {
      color: $color;
      /*width: 200px;*/
      text-align: center;
      width: 100%;
      background-color: $backColor;
      padding: 9px 0;
    }
  }
</style>