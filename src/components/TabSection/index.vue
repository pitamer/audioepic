<template>
    <div id="tabs-section">
      <div id="tabs">
        <div
          class="tab"
          v-for="tab in tabs"
          :key="tabs.indexOf(tab)"
        >
          {{ tab.name }}
        </div>
      </div>
      <div id="add-tab-button" @click="addTab('New Tab')">
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
    * {
      margin: 5px;
    }
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
