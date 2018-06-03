<template>
  <div id="login">
    <form class="col-6 mx-auto my-5" @submit.prevent="login">
      <div class="form-group">
        <label>아이디</label>
        <input type="text" class="form-control" placeholder="ID" v-model="id">
      </div>
      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">
      </div>
      <button class="btn btn-primary">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      id: "",
      password: ""
    }
  },
  methods: {
    login() {
      const { id, password } = this;
      this.$store.dispatch('AUTH_REQUEST', { id, password }).then(() => {
        this.$router.push('/');
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
