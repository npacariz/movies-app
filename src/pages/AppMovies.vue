<template>
  <div id="AppMovies">
      <p>Selected: {{selectedMovies}}</p>
    <MovieSearch @searchTermUpdated="searched"> </MovieSearch>
    <ul  v-for="movie in fillterMovie" :key='movie.id'>
        <MovieRow :movie="movie" @selected="movieSelected" :selectd="selectd"></MovieRow>
    </ul>
    <p v-if="fillterMovie.length === 0"> {{error}} </p>
    <button @click="selectAll">Select All</button>
    <button @click="deselectAll">Deselect All</button>
  </div>
</template>

<script>
import { movies } from '../services/MovieService.js'
import MovieRow from '../components/MovieRow.vue'
import MovieSearch from '../components/MovieSearch.vue'

export default {
  name: 'AppMovies',
  components: {
      MovieRow,
      MovieSearch
      
  },
    data() {
        return {
            movies: [],
            selectedMovies: 0,
            error: "no movies",
            search: '',
            selectd: false
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
        searched(value) {
            this.search = value;
        },
        movieSelected(movie) {
           this.selectedMovies++;
        },
        selectAll(){
            this.selectd = true;
            this.selectedMovies = this.movies.length
        },
        deselectAll() {
             this.selectd = false;
              this.selectedMovies = 0;
        },

    

    
    
} ,

    computed: {
        fillterMovie() {
                return this.movies.filter(movie => {
                return movie.title.toLowerCase().match(this.search.toLowerCase())
            })
            
        }
    }    
  
}


</script>

<style>

</style>