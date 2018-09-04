<template>
  <div id="Login">
    <form @submit.prevent="login()">
       <p class="alert alert-danger" role="alert" v-if="error">Bad credential!!</p>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { auth } from "../services/AuthService";
import { bus } from "../main";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },

  methods: {
    login() {
      auth
        .login(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "movies" });
          bus.$emit("changeStatus", "true");
          this.error = null;
        })
        .catch(error => {
          this.error = error.response.data.error;
        });
    }
  }
};
</script>

<style>
</style>
