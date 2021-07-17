import { createStore } from "vuex";
import { resumeAudioContextIfInSuspendedState } from "@/store/utils";
import {
  initialBoards,
  newBoardSchema,
  defaultNoSound,
  defaultAudioVolume,
} from "./constants";

const audioContext = new AudioContext();
if (audioContext) {
  resumeAudioContextIfInSuspendedState(audioContext);
}

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
      const audioFileAlreadyLoaded = state.loadedAudios.find(
        (audio) => audio.audioFile === audioFile
      );

      if (audioFileAlreadyLoaded) {
        return;
      }

      const audioElement = new Audio(require(`@/assets/audio/${audioFile}`));

      const controlledAudio = audioContext.createMediaElementSource(audioElement);
      const gainNode = audioContext.createGain();

      gainNode.gain.value = defaultAudioVolume;

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
      )?.gainNode;

      if (audioGainNode) {
        audioGainNode.gain.value = updatedVolume;
      }

      // # Server data should also be updated
      // Don't forget to debounce or throttle
    },

    setCurrentBoardIndex(state, payload) {
      state.currentBoardIndex = payload.newCurrentBoardIndex;
    },

    addBoard(state, payload) {
      const { newBoardName } = payload;
      state.boards.push({
        ...newBoardSchema,
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
      console.log(state, payload);
      // # Server data should also be updated
    },

    reorderBoard(state, payload) {
      console.log(state, payload);
      // # Server data should also be updated
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
        newCurrentBoardIndex: payload.newCurrentBoardIndex,
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

      const loop = state.boards[boardIndex].loops[loopIndex];
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

      const track = state.boards[boardIndex].tracks[trackIndex];
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
