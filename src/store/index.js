import { createStore } from "vuex";
import { initialBoards, emptyBoard, defaultNoSound } from "./constants";

const audioContext = new AudioContext();

export default createStore({
  state: {
    boards: initialBoards,
    currentBoardIndex: 0,
    loadedAudios: [],
    editMode: false,
  },

  mutations: {
    // # Probably Should not be a mutation
    resumeAudioContextIfInSuspendedState() {
      // check if context is in suspended state (autoplay policy)
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
    },

    loadAudioIfNeeded(state, payload) {
      const { audioFile } = payload;
      const loadedAudioFiles = state.loadedAudios.map((audio) => audio.audioFile); // # Improve efficiency

      if (loadedAudioFiles.includes(audioFile)) { // # Improve efficiency, just use find() once
        return;
      }

      const audioElement = new Audio(require(`@/assets/audio/${audioFile}`));

      const controlledAudio = audioContext.createMediaElementSource(audioElement);
      const gainNode = audioContext.createGain();

      controlledAudio.connect(gainNode).connect(audioContext.destination);

      state.loadedAudios.push({
        audioFile: audioFile,
        audioElement: audioElement,
        gainNode: gainNode,
      });
    },

    setAudioVolume(state, payload) {
      const { loadedAudios } = state;
      const { audioFile, updatedVolume } = payload;

      const audioGainNode = loadedAudios.find(
        (loadedAudio) => loadedAudio.audioFile === audioFile
      ).gainNode;

      audioGainNode.gain.value = updatedVolume;
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
      const { audioFile = defaultNoSound } = payload;
      const { loadedAudios } = state;

      commit("loadAudioIfNeeded", { audioFile });

      const soundAudio = loadedAudios.find(
        (loadedAudio) => loadedAudio.audioFile === audioFile
      ).audioElement;

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
        (loadedAudio) => loadedAudio.audioFile === audioFile
      ).audioElement;

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
        (loadedAudio) => loadedAudio.audioFile === audioFile
      ).audioElement;

      track.isActive = !track.isActive;

      track.isActive ? trackAudio.play() : trackAudio.pause();
    },
  },

  modules: {},
});
