<template>
    <div id="sound-section" class="section">
        <div class="sound button">1</div>
        <div class="sound button">2</div>
        <div class="sound button">3</div>
        <div class="sound button">4</div>
        <div class="sound button">5</div>
        <div class="sound button">6</div>
        <div class="sound button">7</div>
        <div class="sound button">8</div>
        <div class="sound button">9</div>
        <div class="sound button">0</div>
    </div>
</template>

<script>
export default {
  name: "SoundSection",
};
</script>

<style lang="scss">
#sound-section {
    display: flex;
    .sound {
        margin: 0 5px;
        width: 100%;
    }
}
</style>
