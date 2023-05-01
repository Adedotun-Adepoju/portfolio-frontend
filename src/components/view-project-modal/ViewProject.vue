<template>
  <q-dialog v-model="dialogVisible">
    <div class="main-container">
      <div class="cancel" @click="toggleDialogVisible">
        <p>X</p>
      </div>
      <div class="image-container">
        <div class="top">
          <span
            v-for="(icon, key) in icons"
            :key="key"
            class="circle"
            :style="{ background: icon }"
          >
          </span>
        </div>
        <img :src="imageLink" alt="" class="project-image" />
      </div>
      <p class="title">{{ projectName }}</p>
      <p class="description">{{ description }}</p>
      <div class="skills-container">
        <template v-for="(skill, index) in skills" :key="index">
          <img
            :src="require(`../../assets/img/${skill.toLowerCase()}.svg`)"
            alt=""
            class="skill-image"
          />
        </template>
      </div>
    </div>
  </q-dialog>
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
  methods: {
    toggleDialogVisible() {
      this.$emit("closeModal");
    },
  },
  data() {
    return {
      icons: ["red", "yellow", "green"],
      dialogVisible: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./ViewProject.scss";
</style>
