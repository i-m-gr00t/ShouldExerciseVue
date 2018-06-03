<template>
  <div id="home">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    msg() {
      return this.$store.state.accessToken;
    }
  }
}
</script>

<style lang="scss">

</style>
