import { createStore } from "vuex";
import { initialBoards, emptyBoard } from "./constants";

export default createStore({
  state: {
    boards: initialBoards,
    currentBoardIndex: 0,
    editMode: false,
  },

  mutations: {
    setCurrentBoardIndex(state, payload) {
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

    playSound(state, payload) {
      const { boardIndex, soundIndex } = payload;

      const board = state.boards[boardIndex];
      const sound = board.sounds[soundIndex];

      sound.audio.play();
    },

    toggleLoop(state, payload) {
      const { boardIndex, loopIndex } = payload;

      const board = state.boards[boardIndex];
      const loop = board.loops[loopIndex];

      loop.isActive = !loop.isActive;
      loop.audio.loop = true;

      loop.isActive ? loop.audio.play() : loop.audio.pause();
    },

    toggleTrack(state, payload) {
      const { boardIndex, trackIndex } = payload;

      const board = state.boards[boardIndex];
      const track = board.tracks[trackIndex];

      track.isActive = !track.isActive;

      track.isActive ? track.audio.play() : track.audio.pause();
    },

    deactivateBoards(state) {
      state.boards.forEach((board) => {
        board.sounds.forEach((sound) => (sound.isActive = false));
        board.loops.forEach((loop) => (loop.isActive = false));
        // board.tracks.forEach((track) => (track.isActive = false)); // #
      });
    },
  },

  actions: {
    switchBoard: ({ commit }, payload) => {
      commit({
        type: "setCurrentBoardIndex",
        newcurrentBoardIndex: payload.newcurrentBoardIndex,
      });
      commit("deactivateBoards");
    },
  },

  modules: {},
});
