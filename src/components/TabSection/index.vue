<template>
    <div id="tabs-section" class="section">
      <div id="tabs">
        <TabButton
          v-for="tab, tabIndex in tabs"
          :key="tabIndex"
          :index="tabIndex"
          :name="tab.name"
        />
      </div>
      <div
        id="add-tab-button"
        class="button centered"
        @click="addTab('New Tab')"
        v-if="$store.state.tabs.length < 7"
      >
        +
      </div>
    </div>
</template>

<script>
import TabButton from './TabButton';

export default {
  name: "TabsSection",

  components: {
    TabButton
  },

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
  }
  #add-tab-button {
    margin: 0 5px;
    width: 28px;
  }
}
</style>
