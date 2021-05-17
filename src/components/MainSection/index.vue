<template>
  <div id="main-section">
    <h3>Sounds</h3>
    <hr />
    <SoundSection />
    <h3>Loops</h3>
    <hr />
    <LoopSection />
    <h3>Tracks</h3>
    <hr />
    <TrackSection />
  </div>
</template>

<script>
import SoundSection from "@/components/MainSection/SoundSection";
import LoopSection from "@/components/MainSection/LoopSection";
import TrackSection from "@/components/MainSection/TrackSection";

export default {
  name: "MainSection",
  components: {
    SoundSection,
    LoopSection,
    TrackSection,
  },
};
</script>

<style lang="scss">
h3 {
  margin: 0;
  padding: 0;
}
</style>
