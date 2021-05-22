<template>
    <div id="loop-section" class="section">
        <LoopButton
            v-for="loop, loopIndex in $store.state.boards[$store.state.currentBoardIndex].loops"
            :key="loopIndex"
            :icon="loop.icon"
            :name="loop.name"
        />
    </div>
</template>

<script>
import LoopButton from "./LoopButton";

export default {
  name: "LoopSection",
  components: {
    LoopButton
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
