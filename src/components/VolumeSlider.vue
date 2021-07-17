<template>
  <div class="range-slider" @click.stop="">
    <input
      class="range-slider__range"
      type="range"
      orient="vertical"
      :value="volume"
      @input.stop="setAudioVolume"
      min="0"
      max="2"
      step="0.1"
    />
  </div>
</template>

<script>
import { defaultAudioVolume } from "@/store/constants";

export default {
  name: "VolumeSlider",

  props: {
    audio: Object,
  },

  computed: {
    volume() {
      if (!this.audio) {
        return defaultAudioVolume;
      }

      const { loadedAudios } = this.$store.state;
      const { audioFile } = this.audio;
      const loadedAudio = loadedAudios.find(
        (loadedAudio) => loadedAudio.audioFile === audioFile
      );

      if (loadedAudio) {
        return loadedAudio.gainNode.gain.value;
      }

      return this.audio.volume || defaultAudioVolume;
    },
  },

  methods: {
    setAudioVolume(e) {
      this.$store.commit({
        type: "setAudioVolume",
        audioFile: this.audio?.audioFile,
        updatedVolume: e.target.value,
      });
    },
  },
};
</script>

<style lang="scss">
.range-slider {
  // Base Colors
  $shade-10: #2c3e50 !default;
  $shade-1: #d7dcdf !default;
  $shade-0: #fff !default;
  $teal: #1abc9c !default;

  // Reset
  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  // Range Slider
  $range-width: 4px !default;

  $range-handle-color: $shade-10 !default;
  $range-handle-color-hover: $teal !default;
  $range-handle-size: 8px !default;

  $range-track-color: $shade-1 !default;
  $range-track-height: 50px !default;

  width: $range-handle-size;
  height: $range-track-height;

  .range-slider__range {
    -webkit-appearance: slider-vertical;
    width: $range-width;
    height: $range-track-height;
    border-radius: 5px;
    background: $range-track-color;
    outline: none;
    padding: 0;
    margin: 0;

    // Range Handle
    &::-webkit-slider-thumb {
      appearance: none;
      width: $range-handle-size;
      height: $range-handle-size;
      border-radius: 50%;
      background: $range-handle-color;
      cursor: pointer;
      transition: background 0.15s ease-in-out;

      &:hover {
        background: $range-handle-color-hover;
      }
    }

    &:active::-webkit-slider-thumb {
      background: $range-handle-color-hover;
    }

    &::-moz-range-thumb {
      width: $range-handle-size;
      height: $range-handle-size;
      border: 0;
      border-radius: 50%;
      background: $range-handle-color;
      cursor: pointer;
      transition: background 0.15s ease-in-out;

      &:hover {
        background: $range-handle-color-hover;
      }
    }

    &:active::-moz-range-thumb {
      background: $range-handle-color-hover;
    }

    // Focus state
    &:focus {
      &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px $shade-0, 0 0 0 6px $teal;
      }
    }
  }

  // Firefox Overrides
  ::-moz-range-track {
    background: $range-track-color;
    border: 0;
  }

  input::-moz-focus-inner,
  input::-moz-focus-outer {
    border: 0;
  }
}
</style>
