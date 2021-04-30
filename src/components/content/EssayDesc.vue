<template>
  <div class="essay-div" @click="jumpDetail">
        <div v-if="!information.image">
          <h1 class="title">
            {{information.title}}
          </h1>
          <div class="content">
            {{information.synopsis}}
          </div>
          <p class="time">
            发表于 {{information.publicationdate | filterTime}}
          </p>
        </div>
        <div v-else class="have-img">
          <img :src="information.image" alt="">
          <div class="img-content">
            <h1 class="title">
              {{information.title}}
            </h1>
              <div class="content">
              {{information.synopsis}}
            </div>
            <p class="time">
              {{$t('essay.publishedIn')}} {{information.publicationdate | filterTime}}
            </p>
          </div>
      </div>
  </div>
</template>

<script>

  import {formatTime} from 'common/utile'
  export default {
    name: "EssayDesc",
    props: {
      information: {
        type: Object,
        default() {
          return null;
        }
      }
    },
    computed: {
      format() {
        // return this.$t('essay.timeFormat')
        // return this.$t('essay.timeFormat')
      }
    },
    updated() {
      // console.log(this.information);
      // console.log(this.format);
    },
    filters: {
      filterTime(value) {
        return formatTime(value,  'Y年M月D日 h:m:s')
      }
    },
    methods: {
      jumpDetail() {
        this.$router.push('/detail/' + this.information.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .time {
    font-size: 15px;
    color: #777777;
    width: 100%;
  }
  .essay-div {
    height: 200px;
    padding: 16px 0;
    border-bottom: #B1B1B1 solid 1px;
    cursor: pointer;

    .title {
      height: 45px;
      font-size: 20px;
      color: #000;
      font-weight: bold;
      overflow: hidden;
    }

    .content {
      text-indent: 2em;
      height: 86px;
      line-height: 36px;
      /*display: -webkit-box;*/
      /*-webkit-line-clamp: 3;*/
      /*-webkit-box-orient: vertical;*/
      /*overflow: hidden;*/

      /*word-break: break-all;*/
      /*text-overflow: ellipsis;*/
      /*display: -webkit-box;*/
      /*-webkit-box-orient: vertical;*/
      /*-webkit-line-clamp: 4;*/
      /*overflow: hidden;*/

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;


    }
    .have-img {
      display: flex;
      width: 100%;

      img {
        height: 180px;
        width: 250px;
        display: inline-block;
        margin-top: 16px;
      }
      .img-content {
        padding-left: 12px;
        width: calc(100% - 262px);
      }
    }

  }
</style>