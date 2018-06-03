<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">그래도 운동은 해야지</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <button class="btn btn-outline-danger my-2 my-sm-0" @click="logout()">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('AUTH_LOGOUT')
      .then(() => {
        this.$router.push('/login');
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
