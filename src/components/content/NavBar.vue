<template>
  <div class="navbar">
    <common-nav-bar height="57px" :titleSpan="titleSpan" :profile-offset="profileOffset" :profileSpan="profileSpan">
      <div slot="logo">
        <img src="~assets/logo3.jpg" alt="" width="85px" height="48px">
      </div>
      <div slot="title" class="title-div">
        <div v-for="(title, index) in titles" :key="index" class="title-item">{{title}}</div>
      </div>
      <div slot="search">
        <el-input v-model="SearchKey" placeholder="搜索文章" size="small" class="search-input" @keyup.enter.native="searchEssay">
          <i slot="suffix" class="el-input__icon el-icon-search" @click="searchEssay"></i>
        </el-input>
      </div>
      <div slot="profile"  @mousemove="showProfile" @mouseout="hiddenProfile" class="profile">
        <img src="~assets/img/portrait/touxiang.jpg" alt="" width="85px" height="48px" class="portrait">
        <i class="el-icon-caret-bottom img-right-icon" v-show="!isShowProfile"></i>
        <i class="el-icon-caret-top img-right-icon" v-show="isShowProfile"></i>
      </div>
    </common-nav-bar>
    <profile-menu v-show="isShowProfile"/>
  </div>
</template>

<script>
  import ProfileMenu from './child/ProfileMenu'

  import CommonNavBar from 'components/common/NavBar'
  export default {
    name: "NavBar",
    components: {
      CommonNavBar,
      ProfileMenu
    },
    data() {
      return {
        titleSpan: 5,
        profileOffset: 1,
        profileSpan: 2,
        SearchKey: '',
        isShowProfile: false
      }
    },
    computed: {
      titles() {
        return ['首页', '新闻快讯', '创业资讯', '创业政策']
      }
    },
    methods: {
      showProfile() {
        this.isShowProfile = true
      },
      hiddenProfile() {
        this.isShowProfile = false
      },
      searchEssay() {
        console.log("searchEssay");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    .title-div {
      display: flex;
      justify-content: space-between;
      .title-item {
        /*flex: 1;*/
        padding: 20px 0;
        color: $color;
      }
    }
    .search-input {
      margin: 15px 0;
      width: 300px;
      border-radius: 50px;
    }
    .profile {
      @include marginLeft;
      width: 50px;
      .portrait {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 15px 0
      }
    }

    .img-right-icon {
      color: #FFFFFF;
      position: relative;
      bottom: 23px;
      /*right: 2px;*/
    }
    img {
      margin: 5px 0;
    }
  }
</style>