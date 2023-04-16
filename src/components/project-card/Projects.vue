<template>
  <div class="main-container">
    <div class="image-container">
      <img :src="imageLink" alt="" />
    </div>
    <div class="text-container">
      <h2>{{ title }}</h2>
      <h3>{{ description }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Project.scss";
</style>
