<template>
  <div id="NavBar">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <div>
            <router-link class="navbar-brand" :to="{name: 'movies'}">Movies</router-link >
            <router-link class="navbar-brand" :to="{name: 'add-movie'}">Add Movies</router-link >
          </div>
      
            <router-link class="navbar-brand" :to="{name: 'login'}">Login</router-link>
            <button class="navbar-brand" @click="logout()" >Logut</button>
  
        </div>     
            
    </nav>
  </div>
</template>

<script>
import { auth } from '../services/AuthService'

export default {
  name: "NavBar",

  data() {
    return{
      isAuthenticated: auth.isAuthenticated()
    }
  },
  methods: {
    logout(){
        auth.logout();
        this.isAuthenticated = false;
        this.$router.push({name: 'login'})
        
       
    }
    
  }
};
</script>

<style>
</style>
