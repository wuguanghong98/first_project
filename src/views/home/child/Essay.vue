<template>
  <div>
    <essay-desc />
  </div>
</template>

<script>
  import EssayDesc from 'components/content/EssayDesc'
  export default {
    name: "Essay",
    components: {
      EssayDesc,
    },
    data() {
      return {
        number: 6
      }
    }
  }
</script>

<style scoped>

</style>