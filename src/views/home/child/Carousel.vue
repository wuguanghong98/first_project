<template>
  <el-row type="flex" justify="center"  class="carousel">
    <el-col :span="20">
      <div class="carousel-div">
        <el-carousel height="395px">
          <el-carousel-item v-for="(img, index) in images" :key="index">
            <img :src="img" alt="" width="100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        // images: ['~assets/img/lunb01.jpg', '~assets/img/lunb02.jpg', '~assets/img/lunb03.jpg', '~assets/img/lunb04.jpg']
        images: [require("assets/img/lunb01.jpg"),require("assets/img/lunb02.jpg"),require("assets/img/lunb03.jpg")]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    height: 395px;
    .carousel-div {
      height: 320px;
      width: 100%;
    }
  }

</style>