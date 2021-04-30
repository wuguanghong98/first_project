<template>
  <el-row>
    <el-col :span="2" :offset="20">
      <div class="profile-menu" @mousemove="ShowProfile" @mouseout="hiddenProfile">
        <div v-for="(menu, index) in menus" class="menu" :key="index">{{menu}}</div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "ProfileMenu",
    data() {
      return {}
    },
    computed: {
      menus(){
        return [
          this.$t('profileMenu.peCenter'),
          this.$t('profileMenu.puInformation'),
          this.$t('profileMenu.moInformation'),
          this.$t('profileMenu.chPassword'),
          this.$t('profileMenu.logOut')
        ]
      }

    },
    mounted() {
      // console.log(this.$parent.isShowProfile);
    },
    updated() {

      console.log(this.$t('profileMenu.peCenter'));
      console.log('menus===' + this.menus[0]);
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