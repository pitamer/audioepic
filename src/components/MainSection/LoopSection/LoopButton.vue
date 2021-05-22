<template>
  <div :class="['loop button', { active: isActive }]" @click="toggleLoop">
    <div class="loop-icon">{{ icon }}</div>
    <div class="loop-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "LoopButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
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
    toggleLoop() {
      this.$store.commit({
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
  display: flex;
  flex-flow: column;
  margin: 0 5px;
  width: 100%;
  min-height: 50px;

  &.active {
    background-color: lightblue;
  }

  .loop-icon {
    font-size: 1.5em;
    margin-top: 5px;
  }

  .loop-name {
    font-size: 0.7em;
  }
}
</style>
