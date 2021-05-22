<template>
    <div id="sound-section" class="section">
        <SoundButton
            v-for="sound, soundIndex in $store.state.boards[$store.state.currentBoardIndex].sounds"
            :key="soundIndex"
            :number="sound.number"
            :icon="sound.icon"
            :name="sound.name"
        />
    </div>
</template>

<script>
import SoundButton from './soundButton';

export default {
  name: "SoundSection",
  components: {
      SoundButton
  },
};
</script>

<style lang="scss">
#sound-section {
    display: flex;
}
</style>
