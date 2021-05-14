<template>
  <div id="audioepic">
    <h1>This is Audioepic</h1>
    <h6>
      Well, of course it's not very impressive <strong>yet</strong>. But wait and see!
    </h6>
    <TabSection />
    <MainSection />
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
  // height: 100%;
  border: 1px red dashed;
}
</style>
