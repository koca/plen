import Vue from "vue";
import Vuex, { Store } from "vuex";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

Vue.use(Vuex);

export function createStore(vueInstance = Vue) {
  vueInstance.use(Vuex);
  return new Store({
    state: {
      showSidebar: false,
      searchText: "",
      isSearching: false,
      isDownloaded: undefined,
      sentencesOptions: {
        start: 0,
        end: 50
      },
      sentences: []
    },
    getters,
    mutations,
    actions
  });
}
