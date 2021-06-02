import { createStore } from "vuex";
import { initialBoards, emptyBoard } from "./constants";

export default createStore({
  state: {
    boards: initialBoards,
    currentBoardIndex: 0,
    loadedAudios: [],
    editMode: false,
  },

  mutations: {
    loadAudioIfNeeded(state, payload) {
      const { audioFile } = payload;
      const loadedAudioFiles = state.loadedAudios.map((audio) => audio.file);

      if (loadedAudioFiles.includes(audioFile)) {
        return;
      }

      state.loadedAudios.push({
        file: audioFile,
        audio: new Audio(require(`@/assets/audio/${audioFile}`)),
      });
    },

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

    deactivateBoards(state) {
      state.boards.forEach((board) => {
        board.sounds.forEach((sound) => (sound.isActive = false));
        board.loops.forEach((loop) => (loop.isActive = false));
        board.tracks.forEach((track) => (track.isActive = false));
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

    playSound: ({ commit, state }, payload) => {
      const { audioFile } = payload;
      const { loadedAudios } = state;

      commit("loadAudioIfNeeded", { audioFile });

      const soundAudio = loadedAudios.find(
        (loadedAudio) => loadedAudio.file === audioFile
      ).audio;

      soundAudio.play();
    },

    toggleLoop: ({ commit, state }, payload) => {
      const { boardIndex, loopIndex } = payload;
      const { loadedAudios } = state;

      const board = state.boards[boardIndex];
      const loop = board.loops[loopIndex];

      const { audioFile } = loop;

      commit("loadAudioIfNeeded", { audioFile });

      const loopAudio = loadedAudios.find(
        (loadedAudio) => loadedAudio.file === audioFile
      ).audio;

      loop.isActive = !loop.isActive;
      loopAudio.loop = true;

      loop.isActive ? loopAudio.play() : loopAudio.pause();
    },

    toggleTrack: ({ commit, state }, payload) => {
      const { boardIndex, trackIndex } = payload;
      const { loadedAudios } = state;

      const board = state.boards[boardIndex];
      const track = board.tracks[trackIndex];

      const { audioFile } = track;

      commit("loadAudioIfNeeded", { audioFile });

      const trackAudio = loadedAudios.find(
        (loadedAudio) => loadedAudio.file === audioFile
      ).audio;

      track.isActive = !track.isActive;

      track.isActive ? trackAudio.play() : trackAudio.pause();
    },
  },

  modules: {},
});
