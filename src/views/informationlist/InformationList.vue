<template>
  <div>
    <!--<h1>参数是：{{$route.params.id}}</h1>-->
    <h1>参数是：{{$route.query.name}}</h1>
    <recommend/>
  </div>
</template>

<script>
  import Recommend from 'components/content/Recommend'
  export default {
    name: "InformationList",
    components: {
      Recommend
    }
  }
</script>

<style scoped>

</style>