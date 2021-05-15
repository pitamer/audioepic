import { createStore } from "vuex";
import { initialTabs } from "./constants";

export default createStore({
  state: {
    tabs: initialTabs,
  },

  mutations: {
    addTab(state, payload) {
      const { newTabName } = payload;
      state.tabs.push({name: newTabName});
    },

    deleteTab(state, payload) {state, payload},

    renameTab(state, payload) {state, payload},

    reorderTab(state, payload) {state, payload},
  },

  actions: {},
  
  modules: {},
});
