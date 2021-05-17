import { createStore } from "vuex";
import { initialTabs } from "./constants";

export default createStore({
  state: {
    tabs: initialTabs,
    currentTabIndex: 0,
  },

  mutations: {
    setCurrentTabIndex(state, payload) {
      state.currentTabIndex = payload.newCurrentTabIndex;
    },

    addTab(state, payload) {
      const { newTabName } = payload;
      state.tabs.push({ name: newTabName });
    },

    deleteTab(state, payload) {
      const { deletedTabIndex } = payload;

      if (state.currentTabIndex === deletedTabIndex) {
        state.currentTabIndex = state.tabs[deletedTabIndex + 1]
          ? deletedTabIndex
          : deletedTabIndex > 0
          ? deletedTabIndex - 1
          : null;
      } else if (state.currentTabIndex > deletedTabIndex) {
        state.currentTabIndex--;
      }
      state.tabs.splice(deletedTabIndex, 1);
    },

    renameTab(state, payload) {
      state, payload;
    },

    reorderTab(state, payload) {
      state, payload;
    },
  },

  actions: {},

  modules: {},
});
