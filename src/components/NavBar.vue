<template>
  <div id="NavBar">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <div>
            <router-link class="navbar-brand" :to="{name: 'movies'}">Movies</router-link >
            <router-link class="navbar-brand" :to="{name: 'add-movie'}">Add Movies</router-link >
          </div>
          <div>
            <div v-if="!isAuthenticated">
              <router-link class="navbar-brand" :to="{name: 'login'}">Login</router-link>
              <router-link class="navbar-brand" :to="{name: 'register'}">Register</router-link>
            </div>
            <div v-else>
                <button class="navbar-brand" @click="singout()" >Logut</button>
            </div>
          </div>
        </div>     
            
    </nav>
  </div>
</template>

<script>
import { auth } from "../services/AuthService";
import { bus } from "../main";

export default {
  name: "NavBar",

  data() {
    return {
      isAuthenticated: auth.isAuthenticated()
    };
  },
  created() {
    bus.$on("changeStatus", data => {
      this.isAuthenticated = data;
    });
  },
  methods: {
    singout() {
      auth.logout();
      this.isAuthenticated = false;
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
