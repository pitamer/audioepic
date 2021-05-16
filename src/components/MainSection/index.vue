<template>
    <div id="main-section">
      <SoundSection />
      <LoopSection />
      <TrackSection />
    </div>
</template>

<script>
import SoundSection from '@/components/MainSection/SoundSection';
import LoopSection from '@/components/MainSection/LoopSection';
import TrackSection from '@/components/MainSection/TrackSection';

export default {
  name: "MainSection",
  components: {
    SoundSection,
    LoopSection,
    TrackSection
  }
};
</script>

<style lang="scss">
// #
// #main-section {
//     * {
//       margin: 10px 5px; // #
//     }
// }
</style>
