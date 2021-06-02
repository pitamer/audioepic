<template>
  <div id="sound-section" class="section">
    <SoundButton
      v-for="buttonNumber in numberButtons"
      :key="buttonNumber"
      :buttonNumber="buttonNumber"
    />
  </div>
</template>

<script>
import SoundButton from "./soundButton";
import { numberButtons } from "./constants.js";

export default {
  name: "SoundSection",
  components: {
    SoundButton,
  },

  data() {
    return {
      numberButtons: numberButtons,
    };
  },
};
</script>

<style lang="scss">
#sound-section {
  display: flex;
}
</style>
