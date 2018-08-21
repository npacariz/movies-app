<template>
  <div id="MovieRow">
       <div class="jumbotron" :class="{'backgroundColor': selectd}">
        <h5>Title: {{movie.title}}</h5> 
        <p>Director: {{movie.director}}</p>
        <img :src="movie.imageUrl" alt="Image">
        <p>Release date: {{movie.releaseDate}}</p>
        <p>Gener: {{movie.genre}}</p>
        <button @click.once='select'>Select</button>
        </div>
  </div>
</template>

<script>

export default {
  name: 'MovieRow',
  props: {
      movie: {
          type: Object
      },
      selectd: {
        type: Boolean
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
 
      this.selectd = true;

      this.$emit("selected", this.movie)
      
    }
  }

}


</script>

<style>
.backgroundColor {
  background-color: red;
}
</style>