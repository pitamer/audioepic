<template>
  <div class="sound button">
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
          required: true
      },
      icon: {
          type: String,
          required: true
      },
      name: {
          type: String,
          required: true
      }
  }
};
</script>

<style lang="scss">
.sound {
  display: flex;
  flex-flow: column;
  margin: 0 5px;
  width: 100%;
  min-height: 50px;

  .sound-number, .sound-name {
      font-size: 0.7em
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
