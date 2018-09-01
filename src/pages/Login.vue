<template>
  <div id="Login">
    <form @submit.prevent="login()">
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
      password: ""
    };
  },

  methods: {
    login() {
      auth.login(this.email, this.password).then(() => {
        this.$router.push({ name: "movies" });
        bus.$emit("changeStatus", "true");
      });
    }
  }
};
</script>

<style>
</style>
