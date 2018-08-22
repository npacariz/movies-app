<template>
  <div id="AppMovies">
      <button @click="sortArray('asc')">Sort by Name asc</button>
      <button @click="sortArray('desc')">Sort by Name desc</button>
    <MovieSearch @searchTermUpdated="searched"> </MovieSearch>
    <ul  v-for="movie in fillterMovie" :key='movie.id'>
        <MovieRow :movie="movie" @selected="addMovieToSelected" :class="{'colorRed': find(movie.id)}" ></MovieRow>
    </ul>
    <p v-if="fillterMovie.length === 0"> {{error}} </p>
    <button @click="selectAll">Select All</button>
    <button @click="deselectAll">Deselect All</button>
  </div>
</template>

<script>
import { movies } from "../services/MovieService.js";
import MovieRow from "../components/MovieRow.vue";
import MovieSearch from "../components/MovieSearch.vue";

export default {
  name: "AppMovies",
  components: {
    MovieRow,
    MovieSearch
  },
  data() {
    return {
      movies: [],
      selectedMovies: [],
      error: "no movies",
      search: "",
      selectd: false
    };
  },
  beforeRouteEnter(to, from, next) {
    movies.getAll().then(response => {
      next(vm => {
        vm.movies = response.data;
      });
    });
  },

  methods: {
    searched(value) {
      this.search = value;
    },
    addMovieToSelected(id) {
      if (this.find(id)) {
        let index = this.selectedMovies.findIndex(movie => {
          return movie === id;
        });
        return this.selectedMovies.splice(index, 1);
      }
      this.selectedMovies.push(id);
    },
    find(id) {
      return this.selectedMovies.find(movie => {
        return movie === id;
      });
    },
    selectAll() {
      this.selectedMovies = this.movies.map(movie => movie.id);
    },
    deselectAll() {
      this.selectedMovies = [];
    },
    sortArray(value) {
      if (value === "asc") {
        return this.movies.sort((a, b) => a.title > b.title);
      } else {
        return this.movies.sort((a, b) => a.title < b.title);
      }
    }
  },

  computed: {
    fillterMovie() {
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style>
.colorRed {
  background-color: lightblue;
}
</style>