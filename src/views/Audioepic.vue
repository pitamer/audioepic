<template>
  <div id="audioepic">
    <h1>This is Audioepic</h1>
    <h6>
      Well, of course it's not very impressive <strong>yet</strong>. But wait and see!
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

  #main-screen {
    padding: 10px;
  }

  .button {
    min-height: 28px;
    max-height: 28px;
    border: 3px #c8c8c8 solid;
    border-radius: 8px;
    display: grid;
    place-items: center;
    user-select: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 0px 50px lightblue inset;
    }
  }

  .section {
    margin: 20px 0;
  }
}
</style>
