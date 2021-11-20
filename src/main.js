import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

// IMPORT APPLICATION STYLES
import "bootstrap/dist/css/bootstrap.css";
import "gradely_asset_store/dist/css/app.css";
import "@/shared/assets/scss/custom.scss";
import "vue-plyr/dist/vue-plyr.css";

// IMPORT PLUGINS
import "@/plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
