<template>
  <div id="AddMovie">
        <form @submit.prevent="addUser()">
            <div class="form-group">
                <label for="title">Username:</label>
                <input type="text" class="form-control" id="title" v-model="newUser.username">
                <p class="alert alert-danger" role="alert" v-if="errors.username">{{errors.username[0]}}</p>
            </div>
             <div class="form-group">
                <label for="title">Email:</label>
                <input type="text" class="form-control" id="title" v-model="newUser.email">
                <p class="alert alert-danger" role="alert" v-if="errors.email">{{errors.email[0]}}</p>
            </div>
             <div class="form-group">
                <label for="title">Password:</label>
                <input type="text" class="form-control" id="title" v-model="newUser.password">
                <p class="alert alert-danger" role="alert" v-if="errors.password">{{errors.password[0]}}</p>
            </div>
             <div class="form-group">
                <label for="title">Confirm password:</label>
                <input type="text" class="form-control" id="title" v-model="newUser.password_confirmation">
                <p class="alert alert-danger" role="alert" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</p>
            </div>
            <button type='Submit'>Submit</button>
        </form>
  </div>
</template>

<script>
import { auth } from "../services/AuthService.js";

export default {
  name: "AddMovie",

  data() {
    return {
      newUser: {},
      errors: {}
    };
  },

  methods: {
    addUser() {
      auth
        .addUser(this.newUser)
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  }
};
</script>

<style>
</style>
