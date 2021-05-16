<template>
    <div id="loop-section" class="section">
        <LoopButton
            v-for="loop in loops"
            :key="loops.indexOf(loop)"
            :icon="loop.icon"
            :name="loop.name"
        />
    </div>
</template>

<script>
import LoopButton from "./LoopButton";
import { initialLoops } from "@/store/constants";

export default {
  name: "LoopSection",
  components: {
    LoopButton
  },
  data() {
    return {
      loops: initialLoops
    }
  }
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
