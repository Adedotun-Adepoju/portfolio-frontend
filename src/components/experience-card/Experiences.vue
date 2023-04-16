<template>
  <div class="main-container">
    <div class="date-container">
      <p class="experience-period">
        {{ period.startDate }} - {{ period.endDate }}
      </p>
    </div>
    <p class="job-title">{{ jobTitle }}</p>
    <p class="text">{{ companyName }}</p>
    <div class="skills-container">
      <div v-for="(skill, key) in skills" :key="key" class="skill-wrapper">
        <p>{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    companyName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    period: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Experiences.scss";
</style>
