<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: { Header },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
</style>
