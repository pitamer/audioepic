<template>
    <div id="tabs-section">
      <div id="tabs">
        <div class="tab">[]</div>
        <div class="tab">[]</div>
        <div class="tab">[]</div>
      </div>
      <div id="add-tab-button">
        +
      </div>
    </div>
</template>

<script>
export default {
  name: "TabsSection",
};
</script>

<style lang="scss">
#tabs-section {
    display: flex;
    #tabs {
        display: flex;
        flex-grow: 1;
        .tab {
            width: 100%;
            outline: 1px black solid;
        }
    }
}
</style>
