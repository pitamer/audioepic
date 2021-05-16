<template>
  <div id="track-section" class="section">
    <div class="track button centered">►</div>
    <div class="track button centered">►</div>
    <div class="track button centered">►</div>
  </div>
</template>

<script>
export default {
  name: "TrackSection",
};
</script>

<style lang="scss">
#track-section {
  display: flex;
  flex-flow: column;
  .track {
    margin: 10px 5px;
  }
}
</style>
