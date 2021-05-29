<template>
  <div class="sound button" @click="playSound">
    <div class="sound-number">{{ number }}</div>
    <div class="sound-icon">{{ icon }}</div>
    <div class="sound-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "SoundButton",
  props: {
    number: {
      type: Number,
      required: true,
    },
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
  },

  methods: {
    playSound() {
      this.$store.dispatch({
        type: "playSound",
        boardIndex: this.$store.state.currentBoardIndex,
        soundIndex: this.index,
      });
    },
  },
};
</script>

<style lang="scss">
#sound-section .sound {
  display: flex;
  flex-flow: column;
  margin: 0 5px;
  width: 100%;
  min-height: 50px;

  .sound-number,
  .sound-name {
    font-size: 0.7em;
  }

  .sound-number {
    position: absolute;
    text-align: left;
    padding: 1px 0 0 4px;
  }

  .sound-icon {
    font-size: 1.5em;
    margin-top: 10px;
  }
}
</style>
