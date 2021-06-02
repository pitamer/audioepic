<template>
  <div id="audioepic">
    <!-- // # -->
    <!-- <h1>This is Audioepic</h1> -->
    <h6>
      Sure, it's not very impressive <strong>yet</strong>. But wait and see!
    </h6>
    <div id="main-screen">
      <TabSection />
      <MainSection />
    </div>
  </div>
</template>

<script>
import TabSection from '@/components/TabSection';
import MainSection from '@/components/MainSection';

export default {
  name: "Audioepic",
  components: {
    TabSection,
    MainSection
  },
};
</script>

<style lang="scss">
#audioepic {
  height: 100%;

  h1, h6 { // #
    margin: 10px;
    padding: 0;
  }

  #main-screen {
    padding: 10px;
  }

  .button {
    min-height: 30px;
    min-width: 30px;
    border: 2px #c8c8c8 solid;
    border-radius: 10px;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 0 50px #cccccc80 inset;
      border: 2px #999 solid;
    }
  }

  .section {
    margin: 20px 0;
  }

  .centered {
    display: grid;
    place-items: center;
  }
}
</style>
