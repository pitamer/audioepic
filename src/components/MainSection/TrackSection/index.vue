<template>
    <div id="track-section">
        <div class="track">#</div>
        <div class="track">#</div>
        <div class="track">#</div>
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
        width: 100%;
        outline: 1px black solid;
    }
}
</style>
