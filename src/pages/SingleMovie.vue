<template>
  <div id="MovieRow">
       <div class='movie-card'>
        <h5>Title: <h3>{{movie.title}}</h3></h5>
        <p>Director: {{movie.director}}</p>
        <img :src="movie.imageUrl" alt="Image">
        <p>Release date: {{movie.releaseDate}}</p>
        <p>Gener: {{movie.genre}}</p> 
        </div>
  </div>
</template>

<script>
import { movies } from "../services/MovieService.js";

export default {
  name: "MovieRow",
  data() {
    return {
      movie: {}
    };
  },

  beforeRouteEnter(to, from, next) {
    movies.getSingle(to.params.id).then(response => {
      next(vm => {
        vm.movie = response.data;
      });
    });
  }
};
</script>
<style scoped>
.movie-card {
  padding: 10px;
}
</style>