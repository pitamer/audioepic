<template>
  <div
    :class="[
      'tab button centered',
      { isActive: this.$store.state.currentBoardIndex === this.index },
    ]"
    @click="setcurrentBoardIndex(index)"
  >
    <div class="tab-name centered">{{ name }}</div>
    <div
      class="delete-tab-button button centered"
      @click.stop="deleteBoard(index)"
      v-if="$store.state.boards.length > 1"
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
      isActive: this.$store.state.currentBoardIndex === this.index,
    };
  },

  methods: {
    deleteBoard(deletedBoardIndex) {
      this.$store.commit({
        type: "deleteBoard",
        deletedBoardIndex: deletedBoardIndex,
      });
    },
    setcurrentBoardIndex(newcurrentBoardIndex) {
      this.$store.commit({
        type: "setcurrentBoardIndex",
        newcurrentBoardIndex: newcurrentBoardIndex,
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
