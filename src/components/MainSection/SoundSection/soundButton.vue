<template>
  <div class="sound button" @click="playSound">
    <div class="sound-button-info">
      <div class="sound-number">{{ buttonNumber }}</div>
      <div class="sound-icon">{{ sound?.icon }}</div>
      <div class="sound-name">{{ sound?.name }}</div>
    </div>
    <div class="sound-button-volume">
      <VolumeSlider v-if="this.sound" :sound="this.sound" />
    </div>
  </div>
</template>

<script>
import VolumeSlider from "@/components/VolumeSlider";

export default {
  name: "SoundButton",
  props: {
    buttonNumber: {
      type: Number,
      required: true,
    },
  },

  components: {
    VolumeSlider,
  },

  mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.key === String(this.buttonNumber)) {
        this.playSound();
      }
    });
  },

  methods: {
    playSound() {
      this.$store.dispatch({
        type: "playSound",
        audioFile: this.sound?.audioFile,
      });
    },
  },

  computed: {
    sound() {
      const { boards, currentBoardIndex } = this.$store.state;
      return boards[currentBoardIndex].sounds.find(
        (sound) => sound.number === this.buttonNumber
      );
    },
  },
};
</script>

<style lang="scss">
#sound-section .sound {
  width: 100%;
  margin: 0 5px;
  position: relative;

  .sound-button-info {
    display: flex;
    flex-flow: column;
    min-height: 64px;

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

  &:hover {
    .sound-button-volume {
      opacity: 1;
    }
  }

  .sound-button-volume {
    //outline: 1px red solid;
    height: 100%;
    position: absolute;
    display: grid;
    place-items: center;
    top: 0;
    right: 4px;
    opacity: 0;
  }
}
</style>
