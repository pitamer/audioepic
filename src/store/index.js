import { createStore } from "vuex";
import { initialBoards, emptyBoard } from "./constants";

export default createStore({
  state: {
    boards: initialBoards,
    currentBoardIndex: 0,
    editMode: false,
  },

  mutations: {
    setcurrentBoardIndex(state, payload) {
      state.currentBoardIndex = payload.newcurrentBoardIndex;
    },

    addBoard(state, payload) {
      const { newBoardName } = payload;
      state.boards.push({
        ...emptyBoard,
        name: newBoardName,
      });
    },

    deleteBoard(state, payload) {
      const { deletedBoardIndex } = payload;

      if (state.currentBoardIndex === deletedBoardIndex) {
        state.currentBoardIndex = state.boards[deletedBoardIndex + 1]
          ? deletedBoardIndex
          : deletedBoardIndex > 0
          ? deletedBoardIndex - 1
          : null;
      } else if (state.currentBoardIndex > deletedBoardIndex) {
        state.currentBoardIndex--;
      }
      state.boards.splice(deletedBoardIndex, 1);
    },

    renameBoard(state, payload) {
      state, payload;
    },

    reorderBoard(state, payload) {
      state, payload;
    },
  },

  actions: {},

  modules: {},
});
