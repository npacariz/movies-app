import Vue from "vue";
import VueRouter from "vue-router";
import AppMovies from "../pages/AppMovies.vue";

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
 
];

const router = new VueRouter({
  routes
});
export default router;
