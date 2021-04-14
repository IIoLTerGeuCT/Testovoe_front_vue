import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    isAuth: false,
  },
  actions: {
    setAuthFalse(store) {
      store.commit("setFalse");
    },
    setAuthTrue(store) {
      store.commit("setTrue");
    },
  },
  mutations: {
    setTrue(state) {
      state.isAuth = true;
    },
    setFalse(state) {
      state.isAuth = false;
    },
  },
});

export default store;
