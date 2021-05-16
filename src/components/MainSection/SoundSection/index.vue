<template>
    <div id="sound-section" class="section">
        <SoundButton
            v-for="sound in sounds"
            :key="sounds.indexOf(sound)"
            :number="sound.number"
            :icon="sound.icon"
            :name="sound.name"
        />
    </div>
</template>

<script>
import SoundButton from './soundButton';
import { initialSounds } from '@/store/constants';

export default {
  name: "SoundSection",
  components: {
      SoundButton
  },
  data() {
      return {
          sounds: initialSounds
      }
  }
};
</script>

<style lang="scss">
#sound-section {
    display: flex;
}
</style>
