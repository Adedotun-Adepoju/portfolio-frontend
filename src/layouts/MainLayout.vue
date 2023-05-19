<template>
  <div v-if="loaded" class="main-container">
    <div class="overall-section">
      <nav class="nav-bar">
        <div class="name-section">
          <p>{{ name }}</p>
        </div>
        <div class="links-section">
          <p
            :href="`#${key}`"
            v-for="(link, key) in links"
            :key="key"
            @click="navigatePage(key)"
          >
            {{ link.label }}
          </p>
        </div>
      </nav>
      <hr />
      <div class="overview-section">
        <p class="name">Hi, I'm {{ name }}</p>
        <hr />
        <p class="title">{{ jobRole }}</p>
        <div>
          <p @click="navigatePage('about')">About Me</p>
        </div>
      </div>
    </div>
    <div class="about-section" id="about">
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
            <p class="text">{{ about }}.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-section" id="projects">
      <h5>Projects</h5>
      <div class="projects-container">
        <template v-for="(project, key) in projects" :key="key">
          <ProjectCard
            :title="project.name"
            :imageLink="project.image_link"
            :year="project.year"
            @viewProject="openProjectDescriptionModal(key)"
            class="project-card"
          >
          </ProjectCard>
        </template>
      </div>
    </div>
    <div class="experience-section">
      <p>Experience</p>
      <div class="experience-container">
        <div class="experience-list">
          <div class="vertical-step-line"></div>
          <div
            class="list-title"
            @click="activateCompany(index)"
            :style="`border-left: 3px solid ${computeBorderColor(index)}`"
            v-for="(company, index) in companies"
            :key="index"
          >
            <p :style="`color: ${computeBorderColor(index)}`">{{ company }}</p>
          </div>
        </div>
        <div class="experience-description">
          <ExperienceCard
            :companyName="experience.company"
            :jobTitle="experience.job_title"
            :tasks="experience.roles"
            :period="period(experience.start_date, experience.end_date)"
            :link="experience.link"
            @companyPageRedirect="companyRedirect($event)"
          >
          </ExperienceCard>
        </div>
      </div>
    </div>
    <div class="skills-section">
      <p>Skills</p>
      <div class="skills-card-container">
        <template v-for="(skill, key) in skills" :key="key">
          <SkillCard
            :name="skill.name"
            :fileName="skill.fileName"
            class="skill-card"
          >
          </SkillCard>
        </template>
      </div>
    </div>
    <ViewProject
      v-if="showProjectModal"
      :projectName="currentProject.name"
      :imageLink="currentProject.image_link"
      :description="currentProject.description"
      :skills="currentProject.skills"
      :githubLink="currentProject.github_link"
      :demoLink="currentProject.demo_link"
      class="view-project-modal"
      @closeModal="closeProjectDescriptionModal"
    >
    </ViewProject>
    <footer>
      <p>Contact</p>
      <div class="contact" id="contact">
        <template v-for="(contact, index) in contacts" :key="index">
          <img
            :src="require(`../assets/img/${contact.name}.svg`)"
            @click="redirectContact(index)"
          />
        </template>
      </div>
    </footer>
  </div>
</template>

<script>
import ExperienceCard from "src/components/experience-card/Experiences.vue";
import ProjectCard from "src/components/project-card/Projects.vue";
import SkillCard from "src/components/skill-card/skill.vue";
import ViewProject from "src/components/view-project-modal/ViewProject.vue";
import { projects, experiences, skills } from "src/data/constants";

export default {
  components: {
    ExperienceCard,
    ProjectCard,
    SkillCard,
    ViewProject,
  },

  async mounted() {
    await this.$store.dispatch("fetchProjects");
    await this.$store.dispatch("fetchExperiences");
    this.loaded = true;
  },

  data() {
    return {
      skills: skills,
      projects: projects,
      experiences: experiences,
      loaded: false,
      about:
        "Hello, I'm Adedotun. A data & Software Engineer experienced in developing software solutions for data driven applications. Over the last few years, I've had the opportunity to develop a number of problem solving solutions. My work includes setting up data pipelines, creating backend servers, and implementing machine learning models to solve business problems.",
      name: "Adedotun Adepoju",
      jobRole: "Data | Software Engineer",
      links: {
        about: {
          label: "ABOUT",
        },
        projects: {
          label: "PROJECTS",
        },
        resume: {
          label: "RESUME",
        },
        contact: {
          label: "CONTACT",
        },
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

      currentIndex: 0,
      contacts: [
        {
          name: "github",
          link: "https://github.com/Adedotun-Adepoju/",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/adepoju-adedotun/",
        },
        {
          name: "email",
          link: "mailto:d.e.adepoju@gmail.com",
        },
      ],
      currentProjectIndex: 0,
      showProjectModal: false,
    };
  },
  computed: {
    experience() {
      return this.experiences[this.currentIndex];
    },
    currentProject() {
      return this.projects[this.currentProjectIndex];
    },
    companies() {
      const names = this.experiences.map((item) => {
        return item.company;
      });

      return names;
    },
  },
  methods: {
    activateCompany(index) {
      this.currentIndex = index;
    },

    computeBorderColor(index) {
      if (index == this.currentIndex) {
        return "rgb(81, 233, 194)";
      }
    },

    redirectContact(index) {
      const link = this.contacts[index].link;
      window.open(link, "_blank");
    },
    companyRedirect(companyLink) {
      window.open(companyLink, "_blank");
    },
    openProjectDescriptionModal(key) {
      this.currentProjectIndex = key;
      this.showProjectModal = true;
    },
    closeProjectDescriptionModal() {
      this.showProjectModal = false;
    },
    navigatePage(linkName) {
      if (linkName == "resume") {
        window.open(
          "https://drive.google.com/file/d/1KtFse7TuSCz_bTLamFTHbgW14UyKuxeL/view?usp=share_link"
        );
      } else {
        const element = document.getElementById(linkName);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    period(startDate, endDate) {
      if (endDate) {
        return {
          startDate,
          endDate,
        };
      }

      return {
        startDate,
        endDate: "Present",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
