import Vue from "vue";
import VueRouter from "vue-router";
import AppMovies from "../pages/AppMovies.vue";
import AddMovie from "../pages/AddMovie.vue";
import Login from "../pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/movies",
    name: "movies",
    component: AppMovies
  },
  {
    path: "/",
    redirect: { name: "movies" }
  },
  {
    path: "/add",
    component: AddMovie,
     name: "add-movie"
  },
  {
    path: "/login",
    component: Login,
     name: "login"
  },
 
];

const router = new VueRouter({
  routes
});
export default router;
