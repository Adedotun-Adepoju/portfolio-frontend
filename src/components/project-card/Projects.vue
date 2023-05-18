<template>
  <div class="main-container" @click="viewProject">
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

  methods: {
    viewProject() {
      this.$emit("viewProject");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Project.scss";
</style>
