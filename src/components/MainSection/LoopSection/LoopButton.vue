<template>
  <div :class="['loop button', { active: loop.isActive }]" @click="toggleLoop">
    <div class="loop-button-info">
      <div class="loop-icon">{{ loop.icon }}</div>
      <div class="loop-name">{{ loop.name }}</div>
    </div>
    <div class="loop-button-volume">
      <VolumeSlider v-if="true" :audio="this.loop" />
    </div>
  </div>
</template>

<script>
import VolumeSlider from "@/components/VolumeSlider";

export default {
  name: "LoopButton",

  components: {
    VolumeSlider,
  },

  props: {
    loop: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  methods: {
    toggleLoop() {
      this.$store.dispatch({
        type: "toggleLoop",
        boardIndex: this.$store.state.currentBoardIndex,
        loopIndex: this.index,
      });
    },
  },
};
</script>

<style lang="scss">
#loop-section .loop {
  width: 100%;
  margin: 0 5px;
  position: relative;

  .loop-button-info {
    display: flex;
    flex-flow: column;
    min-height: 64px;

    .loop-name {
      font-size: 0.7em;
    }

    .loop-icon {
      font-size: 1.5em;
      margin-top: 10px;
    }
  }

  &.active {
    background-color: lightblue;
  }

  .loop-button-volume {
    height: 100%;
    position: absolute;
    display: grid;
    place-items: center;
    top: 0;
    right: 4px;
    opacity: 0;
  }

  &:hover {
    .loop-button-volume {
      opacity: 1;
    }
  }
}
</style>
