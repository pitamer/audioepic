<template>
  <div class="loop button">
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

  .loop-icon {
    font-size: 1.5em;
    margin-top: 5px;
  }

  .loop-name {
    font-size: 0.7em;
  }
}
</style>
