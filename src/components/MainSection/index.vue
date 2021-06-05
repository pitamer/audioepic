<template>
  <div id="main-section">
    <h3>⌾ Sounds</h3>
    <SoundSection />
    <h3>↻ Loops</h3>
    <LoopSection />
    <h3>🎵 Tracks</h3>
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
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
  padding: 0;
  width: 100%;
  background-color: skyblue;
  border-radius: 5px;
  user-select: none;
}
</style>
