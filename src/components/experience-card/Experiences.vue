<template>
  <div class="main-container">
    <div class="title">
      <p>
        <span class="job-title">{{ jobTitle }}</span>
        <span class="company" @click="redirect"> @ {{ companyName }}</span>
      </p>
    </div>
    <div class="sub-title">
      <p>
        {{ formatDate(period.startDate) }} - {{ formatDate(period.endDate) }}
      </p>
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
    formatDate(dateString) {
      if (dateString.toLowerCase() == "present") {
        return dateString;
      }
      const date = new Date(dateString);
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();

      return `${month} ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./experiences.scss";
</style>
