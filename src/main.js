import Vue from "vue";
import App from "./App.vue";
import { createStore } from "./store";
import BaseButton from "./components/BaseButton.vue";
import BaseLink from "./components/BaseLink.vue";

import "./registerServiceWorker";
Vue.config.productionTip = false;

Vue.component("BaseButton", BaseButton);
Vue.component("BaseLink", BaseLink);

new Vue({
  store: createStore(),
  render: h => h(App)
}).$mount("#app");
