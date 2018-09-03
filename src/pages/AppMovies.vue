<template>
  <div id="AppMovies">
    <MovieSearch @searchTermUpdated="searched"> </MovieSearch>
    <hr>
    <div>
      <small>Sort by name: </small>
      <button class="btn btn-outline-info btn-sm" @click="sort('asc')"><i class="fas fa-sort-up"> </i></button>
      <button class="btn btn-outline-info btn-sm" @click="sort('des')"><i class="fas fa-sort-down"></i></button>
      <br>
      <br>
      <button class="btn btn-outline-primary btn-sm" @click="selectAll">Select All</button>
      <button class="btn btn-outline-danger btn-sm" @click="deselectAll">Deselect All</button>
      <br> 
    </div>
    <small>Selected movies {{selectedMovies.length}}</small>
    <ul  v-for="movie in fillterMovie" :key='movie.id'>
        <MovieRow :movie="movie" @selected="addMovieToSelected" :class="{'colorRed': find(movie.id)}" ></MovieRow>
    </ul>
    <p v-if="fillterMovie.length === 0"> {{error}} </p>
    <small>Page {{pageCount +1 }} of {{numbeOfPages }}</small><br>
    <button class="btn btn-outline-info  btn-sm" @click="pageMove('-')" :disabled='pageCount < 1'><i class="fas fa-angle-left"></i></button>
    <button class="btn btn-outline-info  btn-sm" @click="pageMove('+')" :disabled='pageCount >= numbeOfPages -1'><i class="fas fa-angle-right"></i></button>
   
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
      error: "No movies",
      search: "",
      selectd: false,
      pageCount: 0,
      sizeOfPage: 10
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
    sort(value) {
      let valueOfSearch = 1;
      value === "asc" ? (valueOfSearch = 1) : (valueOfSearch = -1);
      this.movies = this.movies.sort((a, b) => {
        return a.title.toLowerCase() > b.title.toLowerCase()
          ? valueOfSearch
          : -valueOfSearch;
      });
    },

    pageMove(value) {
      value === "+" ? this.pageCount++ : this.pageCount--;
    }
  },

  computed: {
    fillterMovie() {
      let listPaginat = this.movies.filter(movie => {
        return movie.title.toLowerCase().match(this.search.toLowerCase());
      });
      const pageStart = this.pageCount * this.sizeOfPage;
      const pageEnd = pageStart + this.sizeOfPage;
      return listPaginat.slice(pageStart, pageEnd);
    },
    numbeOfPages() {
      return Math.ceil(this.movies.length / this.sizeOfPage);
    }
  }
};
</script>

<style>
.colorRed {
  background-color: lightblue;
}
button {
  margin-right: 2px;
}
</style>