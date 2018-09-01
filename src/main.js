import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
