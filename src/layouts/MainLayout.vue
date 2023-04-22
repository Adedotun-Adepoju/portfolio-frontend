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
        <div class="skills-container">
          <template v-for="(skill, key) in skillImages" :key="key">
            <img :src="require(`../assets/img/${skill}.svg`)" />
          </template>
        </div>
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
    <div class="project-section">
      <h5>Projects</h5>
      <div class="projects-container">
        <template v-for="(project, key) in projects" :key="key">
          <ProjectCard
            :title="project.title"
            :imageLink="project.imageLink"
            :year="project.year"
            class="project-card"
          >
          </ProjectCard>
        </template>
      </div>
    </div>
    <div class="skills-section"></div>
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
import ProjectCard from "src/components/project-card/Projects.vue";
export default {
  components: {
    ExperienceCard,
    ProjectCard,
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
      skillImages: [
        "javascript",
        "python",
        "typescript",
        "rails",
        "nestjs",
        "pg",
        "docker",
        "google",
        "airflow",
        "bigquery",
        "dbt",
        "pandas",
        "html",
        "css",
        "vue",
        "git",
      ],
      projects: [
        {
          title: "Football Stats ETL Pipeline",
          description: "",
          imageLink:
            "https://cdn.pixabay.com/photo/2016/05/27/14/33/football-1419954_1280.jpg",
          year: "2022",
        },
        {
          title: "Voice powered E-commerce site",
          year: "2023",
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLunbbnnCMjoY_dU51CSh5EAKGfXkYV-BAUg&usqp=CAU",
        },
        {
          title: "Loan Prediction ML model",
          year: "2022",
          imageLink:
            "data:image/jpeg;base64,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",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
