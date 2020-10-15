import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

// Layouts
import Default from "./views/layouts/Default.vue";
import Blank from "./views/layouts/Blank.vue";

Vue.component("default-layout", Default);
Vue.component("blank-layout", Blank);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
