<template>
  <div class="main-container">
    <div class="image-container">
      <img :src="imageLink" alt="" />
    </div>
    <div class="text-container">
      <p>{{ title }}</p>
    </div>
    <div class="skills">
      <template v-for="(skill, index) in skills" :key="index">
        <p>{{ skill }}</p>
      </template>
    </div>
    <div class="project-description">
      <p @click="viewProject">View description</p>
      <p @click="goToGithub">View code</p>
      <p @click="goToDemo">View Project</p>
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
    skills: {
      type: Array,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    demoLink: {
      type: String,
      required: true,
    },
  },

  methods: {
    viewProject() {
      this.$emit("viewProject");
    },
    goToGithub() {
      window.open(this.githubLink);
    },
    goToDemo() {
      window.open(this.demoLink);
    },
  },
  mounted() {
    console.log(this.imageLink);
  },
};
</script>

<style lang="scss" scoped>
@import "./project.scss";
</style>
