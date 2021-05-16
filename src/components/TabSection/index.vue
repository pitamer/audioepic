<template>
    <div id="tabs-section" class="section">
      <div id="tabs">
        <div
          class="tab button"
          v-for="tab in tabs"
          :key="tabs.indexOf(tab)"
        >
          {{ tab.name }}
        </div>
      </div>
      <div
        id="add-tab-button"
        class="button"
        @click="addTab('New Tab')"
      >
        +
      </div>
    </div>
</template>

<script>
export default {
  name: "TabsSection",

  data() {
    return {
      tabs: this.$store.state.tabs,
    }
  },

  methods: {
    addTab(newTabName) {
      this.$store.commit({
        type: 'addTab',
        newTabName: newTabName,
      })
    },
  }
};
</script>

<style lang="scss">
#tabs-section {
  display: flex;
  #tabs {
    display: flex;
    flex-grow: 1;
    .tab {
      margin: 0 5px;
      width: 100%;
    }
  }
  #add-tab-button {
    margin: 0 5px;
    width: 28px;
  }
}
</style>
