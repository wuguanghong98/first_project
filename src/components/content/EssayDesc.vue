<template>
  <div class="essay-div">
      <div v-for="(essay, index) in essays" :key="index">
        <div v-if="!essay.img">
          <h1 class="title">
            {{essay.title}}
          </h1>
          <div class="content">
            {{essay.content}}
          </div>
          <p class="time">
            发表于 {{essay.time}}
          </p>
        </div>
        <div v-else class="have-img">
          <img :src="essay.img" alt="">
          <div class="img-content">
            <h1 class="title">
              {{essay.title}}
            </h1>
              <div class="content">
              {{essay.content}}
            </div>
            <p class="time">
              发表于 {{essay.time}}
            </p>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "EssayDesc",
    data() {
      return {
        essays: [
          {
            title: 'UFO科创李杨：创业的意义在于不断探索未知',
            img: '',
            content: `UFO科创李杨：创业的意义在于不断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国
        断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国义在于不断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国
        断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国`,
            time: '2020-12-25'
          },
          {
            title: 'UFO科创李杨：创业的意义在于不断探索未知有图片',
            img: require('assets/img/information2.jpg'),
            content: `UFO科创李杨：创业的意义在于不断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国
        断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国义在于不断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国
        断探索未知中国创新创业网新闻中国采编网中国新闻采编网谋定研究中国智库网经信研究国研智库国`,
            time: '2020-12-25'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .essay-div {
    height: 200px;
    padding: 16px 0;
    border-bottom: #B1B1B1 solid 1px;

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
      .time {
        font-size: 15px;
        color: #777777;
        width: 100%;
      }
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