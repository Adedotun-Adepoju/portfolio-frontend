<template>
  <div class="main-container">
    <div class="image-container">
      <img :src="imageLink" alt="" />
    </div>
    <div class="text-container">
      <div class="year-wrapper">
        <p>{{ year }}</p>
      </div>
      <p>{{ title }}</p>
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
    year: {
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
