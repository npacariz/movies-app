<template>
  <div id="MovieRow">
       <div >
        <h5>Title: {{movie.title}}</h5> 
        <p>Director: {{movie.director}}</p>
        <img :src="movie.imageUrl" alt="Image">
        <p>Release date: {{movie.releaseDate}}</p>
        <p>Gener: {{movie.genre}}</p>
        <button  @click='select'>Select</button>
        </div>
  </div>
</template>

<script>
export default {
  name: "MovieRow",
  props: {
    movie: {
      type: Object
    }
  },

  beforeRouteEnter(to, from, next) {
    movies.getAll().then(response => {
      next(vm => {
        vm.movies = response.data;
      });
    });
  },

  methods: {
    select() {
      this.$emit("selected", this.movie.id);
    }
  }
};
</script>

<style>
</style>