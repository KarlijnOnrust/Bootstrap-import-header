import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

/*
 * ==========================================
 * BOOTSTRAP
 * ==========================================
 */
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

/*
 * ==========================================
 * FONTAWESOME
 * ==========================================
 */
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

/*
 * ==========================================
 * PRIVATE IMPORTS
 * ==========================================
 */
//import './assets/styles/Styles.css'
import "./assets/scripts/Scripts.js";

//==========================================//
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
