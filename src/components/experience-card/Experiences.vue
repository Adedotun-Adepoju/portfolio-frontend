<template>
  <div class="main-container">
    <div class="title">
      <p>
        <span class="job-title">{{ jobTitle }}</span>
        <span class="company" @click="redirect"> @ {{ companyName }}</span>
      </p>
    </div>
    <div class="sub-title">
      <p>{{ period.startDate }} - {{ period.endDate }}</p>
    </div>
    <div class="body">
      <ul>
        <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
      </ul>
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
    tasks: {
      type: Array,
      required: true,
    },
    period: {
      type: Object,
    },
    link: {
      type: Object,
      required: true,
    },
  },

  methods: {
    redirect() {
      this.$emit("companyPageRedirect", this.link);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Experiences.scss";
</style>
