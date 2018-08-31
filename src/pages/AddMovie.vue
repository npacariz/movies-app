<template>
  <div id="AddMovie">
        <form @submit.prevent = "addNewMovie()">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" v-model="newMovie.title">
                <p class="alert alert-danger" role="alert" v-if="errors.title">{{errors.title[0]}}</p>
            </div>
            <div class="form-group">
                <label for="director">Director:</label>
                <input type="text" class="form-control" id="director" v-model="newMovie.director">
                <p class="alert alert-danger" role="alert" v-if="errors.director">{{errors.director[0]}}</p>
            </div>
             <div class="form-group">
                <label for="imageUrl">Image Url:</label>
                <input type="text" class="form-control" id="imageUrl" v-model="newMovie.imageUrl">
                <p class="alert alert-danger" role="alert" v-if="errors.imageUrl">{{errors.imageUrl[0]}}</p>
            </div>
             <div class="form-group">
                <label for="duration">Duration:</label>
                <input type="number" class="form-control" id="duration" v-model="newMovie.duration">
                <p class="alert alert-danger" role="alert" v-if="errors.duration">{{errors.duration[0]}}</p>
            </div>
            <div class="form-group">
                <label for="releaseDate">Release Date:</label>
                <input type="date" class="form-control" id="releaseDate" v-model="newMovie.releaseDate">
                <p class="alert alert-danger" role="alert" v-if="errors.releaseDate">{{errors.releaseDate[0]}}</p>
            </div>
            <div class="form-group">
                <label for="genre">Genre:</label>
                <input type="text" class="form-control" id="releaseDate" v-model="newMovie.genre">
                <p class="alert alert-danger" role="alert" v-if="errors.genre">{{errors.genre[0]}}</p>
            </div>
            <button type='Submit'>Submit</button>
        </form>
  </div>
</template>

<script>
import { movies } from "../services/MovieService.js";

export default {
  name: "AddMovie",

  data() {
      return {
          newMovie: {},
          errors: {},
          success: false
      }
  },

  methods: {
      addNewMovie() {
          movies.add(this.newMovie)
          .then(() => {
              this.$router.push({name:'movies'})
          })
          .catch((error) => {
              this.errors = error.response.data.errors;
          })
      }
  }
};

</script>

<style>
</style>
