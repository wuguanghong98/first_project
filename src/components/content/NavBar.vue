<template>
  <div class="navbar">
    <common-nav-bar height="57px" :titleSpan="titleSpan" :profile-offset="profileOffset" :profileSpan="profileSpan">
      <div slot="logo">
        <img src="~assets/logo3.jpg" alt="去首页"
             @click="logoImgClick"
             width="85px"
             height="48px"
             style="cursor:pointer;">
      </div>
      <div slot="title" class="title-div" >
        <div v-for="(title, index) in titles"
             :key="index" class="title-item"
             @click="jumpToInfoList(title.url, index)"
             :class="{active: currentIndex == index}">
          {{title.name}}
        </div>
      </div>
      <div slot="search">
        <el-input v-model="SearchKey"
                  :placeholder="$t('header.searchInputPlaceholder')"
                  size="small"
                  class="search-input"
                  @keyup.enter.native="searchEssay">
          <i slot="suffix"
             class="el-input__icon el-icon-search"
             @click="searchEssay"></i>
        </el-input>
      </div>
      <div slot="profile"
           @mousemove="showProfile"
           @mouseout="hiddenProfile"
           v-if="isLogin"
           class="profile">
        <img src="~assets/img/portrait/touxiang.jpg"
             alt=""
             width="85px"
             height="48px"
             class="portrait">
        <i class="el-icon-caret-bottom img-right-icon" v-show="!isShowProfile"></i>
        <i class="el-icon-caret-top img-right-icon" v-show="isShowProfile"></i>
      </div>
      <div slot="profile" v-else class="login" @click="jumpLogin">
        登录 | 注册
      </div>
      <div slot="lang" class="lang">
        <span v-if="showChangLang" @click="changeLang('en')">切换成英语</span>
        <span v-else @click="changeLang('zh')">切换成中文</span>
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
        isShowProfile: false,
        showChangLang: true,
        currentIndex: 0,
      }
    },
    computed: {
      titles() {
        return [
          {
            name: this.$t('header.home'),
            url: '/'
          },
          {
            name: this.$t('header.newsFlash'),
            url: '/newsFlash'
          },
          {
            name: this.$t('header.enInformation'),
            url: '/enInformation'
          },
          {
            name: this.$t('header.enPolicy'),
            url: '/enPolicy'
          }
        ]
      },
      isLogin() {
        return this.$store.state.isLogin
      }
    },
    methods: {
      logoImgClick() {
        this.currentIndex = 0
        this.$router.push('/')
      },
      showProfile() {
        this.isShowProfile = true
      },
      hiddenProfile() {
        this.isShowProfile = false
      },
      searchEssay() {
        console.log("searchEssay");
      },
      jumpToInfoList(url, index) {
        this.currentIndex = index
        if(index == 0) {
          this.$router.push('/')
        }else {
          // this.$router.push('/informationList/' + index)
          this.$router.push({
            path: url,
            query: {
              type: index + 3,
            }
          })
        }

      },
      changeLang(val) {
        this.$i18n.locale = val
        this.showChangLang = !this.showChangLang
      },
      jumpLogin() {
        this.$router.push('/login')
      }
    },
    mounted() {
      console.log(this.isLogin);
    }
  }
</script>

<style lang="scss" scoped>
  .active {
    color: #ECF5FF !important
  }

  .navbar {
    .title-div {
      display: flex;
      justify-content: space-between;
      .title-item {
        flex: 1;
        padding: 20px 0;
        color: $color;
        cursor:pointer;
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
    .login {
      padding: 22px 0;
      font-size: 15px;
      cursor: pointer;
      color: #303133;
    }
    .lang {
      padding: 22px 0;
      color: $color;
      font-size: 14px;
      margin-left: -23px;
      cursor:pointer;
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