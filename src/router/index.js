import Vue from "vue";
import VueRouter from "vue-router";
import AppMovies from "../pages/AppMovies.vue";
import AddMovie from "../pages/AddMovie.vue";
import Login from "../pages/Login.vue";
import AppRegister from "../pages/AppRegister.vue";
import SingleMovie from "../pages/SingleMovie.vue";
import { auth } from "../services/AuthService";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "movies" },
    meta: { requiresAuth: true }
  },
  {
    path: "/movies",
    name: "movies",
    component: AppMovies,
    meta: { requiresAuth: true }
  },
  {
    path: "/movie/:id",
    component: SingleMovie,
    name: "movie",
    meta: { requiresAuth: true }
  },
  {
    path: "/add",
    component: AddMovie,
    name: "add-movie",
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { Guest: true }
  },
  {
    path: "/register",
    component: AppRegister,
    name: "register",
    meta: { Guest: true }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.requiresAuth) {
    if (auth.isAuthenticated()) {
      return next();
    } else {
      return next({ name: "login" });
    }
  }
  if (to.meta.Guest) {

    if (auth.isAuthenticated()) {
      return next(false);
    } else {
      return next();
    }
  }
  next();
});

export default router;
