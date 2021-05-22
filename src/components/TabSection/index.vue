<template>
  <div id="tabs-section" class="section">
    <div id="tabs">
      <TabButton
        v-for="board, boardIndex in boards"
        :key="boardIndex"
        :index="boardIndex"
        :name="board.name"
      />
    </div>
    <div
      id="add-board-button"
      class="button centered"
      @click="addBoard('New Board')"
      v-if="$store.state.boards.length < 7"
    >
      +
    </div>
  </div>
</template>

<script>
import TabButton from "./TabButton";

export default {
  name: "TabsSection",

  components: {
    TabButton,
  },

  data() {
    return {
      boards: this.$store.state.boards,
    };
  },

  methods: {
    addBoard(newBoardName) {
      this.$store.commit({
        type: "addBoard",
        newBoardName: newBoardName,
      });
    },
  },
};
</script>

<style lang="scss">
#tabs-section {
  display: flex;
  #tabs {
    display: flex;
    flex-grow: 1;
  }
  #add-board-button {
    margin: 0 5px;
    width: 28px;
  }
}
</style>
