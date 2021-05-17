<template>
  <div
    :class="['tab button centered', {isActive: this.$store.state.currentTabIndex === this.index}]"
    @click="setCurrentTabIndex(index)"
>
    <div class="tab-name centered">{{ name }}</div>
    <div
      class="delete-tab-button button centered"
      @click.stop="deleteTab(index)"
      v-if="$store.state.tabs.length > 1"
    >
      X
    </div>
  </div>
</template>

<script>
export default {
  name: "TabButton",

  props: {
    name: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      isActive: this.$store.state.currentTabIndex === this.index,
    };
  },

  methods: {
    deleteTab(deletedTabIndex) {
      this.$store.commit({
        type: "deleteTab",
        deletedTabIndex: deletedTabIndex,
      });
    },
    setCurrentTabIndex(newCurrentTabIndex) {
      this.$store.commit({
        type: "setCurrentTabIndex",
        newCurrentTabIndex: newCurrentTabIndex,
      });
    },
  },
};
</script>

<style lang="scss">
#tabs-section #tabs .tab {
  margin: 0 5px;
  width: 100%;
  display: flex;

  &.isActive {
      background-color: lightblue;
  }

  .tab-name {
    flex-grow: 1;
  }

  .delete-tab-button {
    font-size: 0.75em;
    min-height: 26px;
    min-width: 26px;
    margin-right: 2px;
    border: none;
    border-radius: 7.5px;
    &:hover {
      box-shadow: 0 0 0 50px #cccccc inset;
    }
    &:active {
      box-shadow: 0 0 0 50px #bbb inset;
    }
  }
}
</style>
