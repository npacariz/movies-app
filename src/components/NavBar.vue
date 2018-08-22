<template>
  <div id="NavBar">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
              <router-link class="navbar-brand" :to="{name: 'movies'}">Movies</router-link >
        </div>     
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
</style>
