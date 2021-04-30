<template>
  <div class="home">
    <carousel/>
    <Content/>
  </div>
</template>

<script>
  import Carousel from './child/Carousel'
  // import Content from './child/Content'
  import Content from './child/Content'
export default {
  name: 'Home',
  components: {
    Carousel,
    Content
  },
  computed: {
    // images() {
    //   return
    // }
  },
}
</script>

<style lang="scss" scoped>
  .home {
    height: auto;

  }

</style>