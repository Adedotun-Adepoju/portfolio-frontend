<template>
  <div class="main-container">
    <img :src="imageLink" alt="" class="project-image" />
    <p class="title">{{ projectName }}</p>
    <p class="description">{{ description }}</p>

    <template v-for="(skill, index) in skills" :key="index">
      <img
        :src="require(`../../assets/img/skills-bw/${skill}.svg`)"
        alt=""
        class="skill-image"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "ViewProject",
  props: {
    projectName: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./ViewProject.scss";
</style>
