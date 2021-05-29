<template>
  <div :class="['track button', { active: isActive }]" @click="toggleTrack">
    <div class="track-name">{{ name }} ►</div>
  </div>
</template>

<script>
export default {
  name: "TrackButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    toggleTrack() {
      this.$store.dispatch({
        type: "toggleTrack",
        boardIndex: this.$store.state.currentBoardIndex,
        trackIndex: this.index,
      });
    },
  },
};
</script>

<style lang="scss">
#track-section .track {
  display: flex;
  flex-flow: column;

  &.active {
    background-color: lightblue;
  }
}
</style>
