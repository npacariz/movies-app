<template>
  <div id="MovieRow">
       <div class='movie-card'>
        <h5>Title: <router-link :to="{name: 'movie', params:{id: movie.id}}" ><h3>{{movie.title}}</h3> </router-link></h5>
        <p>Director: {{movie.director}}</p>
        <img :src="movie.imageUrl" alt="Image">
        <p>Release date: {{movie.releaseDate}}</p>
        <p>Gener: {{movie.genre}}</p>
        <button class="btn btn-outline-success btn-sm" @click='select'>Select</button>
        
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

  methods: {
    select() {
      this.$emit("selected", this.movie.id);
    }
  }
};
</script>
<style scoped>
.movie-card {
  padding: 10px;
}
</style>