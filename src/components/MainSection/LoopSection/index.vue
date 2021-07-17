<template>
  <div id="loop-section" class="section">
    <LoopButton
      v-for="(loop, loopIndex) in this.loops"
      :key="loopIndex"
      :index="loopIndex"
      :loop="loop"
    />
  </div>
</template>

<script>
import LoopButton from "./LoopButton";

export default {
  name: "LoopSection",

  components: {
    LoopButton,
  },

  computed: {
    loops() {
      const { boards, currentBoardIndex } = this.$store.state;
      return boards[currentBoardIndex].loops;
    },
  },
};
</script>

<style lang="scss">
#loop-section {
  display: flex;
  .loop {
    margin: 0 5px;
    width: 100%;
  }
}
</style>
