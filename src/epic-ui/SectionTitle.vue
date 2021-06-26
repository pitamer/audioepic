<template>
  <h3>{{ title }}</h3>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
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
