<template>
  <div id="track-section" class="section">
    <TrackButton
      v-for="(track, trackIndex) in $store.state.boards[
        $store.state.currentBoardIndex
      ].tracks"
      :key="trackIndex"
      :index="trackIndex"
      :icon="track.icon"
      :name="track.name"
      :isActive="track.isActive"
    />
  </div>
</template>

<script>
import TrackButton from "./TrackButton";

export default {
  name: "TrackSection",
  components: {
    TrackButton,
  },
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
