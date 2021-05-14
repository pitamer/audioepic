<template>
    <div id="loop-section">
        <div class="loop">o</div>
        <div class="loop">o</div>
        <div class="loop">o</div>
        <div class="loop">o</div>
        <div class="loop">o</div>
        <div class="loop">o</div>
    </div>
</template>

<script>
export default {
  name: "LoopSection",
};
</script>

<style lang="scss">
#loop-section {
    display: flex;
    .loop {
        width: 100%;
        outline: 1px black solid;
    }
}
</style>
