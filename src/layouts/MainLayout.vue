<template>
  <div class="main-container">
    <div class="overall-section">
      <nav class="nav-bar">
        <div class="name-section">
          <p>{{ name }}</p>
        </div>
        <div class="links-section">
          <p v-for="(link, key) in links" :key="key">{{ link.label }}</p>
        </div>
      </nav>
      <hr />
      <div class="overview-section">
        <h1>{{ name }}</h1>
        <hr />
        <h3>{{ jobRole }}</h3>
        <div>
          <p>About Me</p>
        </div>
      </div>
    </div>
    <div class="about-section">
      <h2>About Me</h2>
      <div class="description-container">
        <div class="skills-container"></div>
        <div class="about">
          <div class="top">
            <span
              v-for="(icon, key) in icons"
              :key="key"
              class="circle"
              :style="{ background: icon }"
            >
            </span>
          </div>
          <div class="content">
            <p class="text">I'm Adedotun Adepoju.</p>
          </div>
        </div>
      </div>
    </div>
    <ExperienceCard
      :companyName="companyName"
      :jobTitle="jobTitle"
      :skills="skills"
      :period="period"
    >
    </ExperienceCard>
  </div>
</template>

<script>
import ExperienceCard from "src/components/experience-card/Experiences.vue";
export default {
  components: {
    ExperienceCard,
  },

  data() {
    return {
      name: "Adedotun Adepoju",
      jobRole: "Data | Software Engineer",
      links: {
        about: {
          label: "ABOUT",
          to: "",
        },
        projects: {
          label: "PROJECTS",
          to: "",
        },
        resume: {
          label: "RESUME",
          to: "",
        },
        contact: {
          label: "CONTACT",
          to: "",
        },
      },
      companyName: "B54",
      jobTitle: "Data Engineer",
      skills: ["Python", "SQL", "Javascript", "DBT", "GCP", "Metabase"],
      period: {
        startDate: "04.2022",
        endDate: "Present",
      },
      icons: ["red", "yellow", "green"],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
