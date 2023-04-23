<template>
  <div class="main-container">
    <div class="image">
      <img
        :src="require(`../../assets/img/skills-bw/${fileName}.svg`)"
        alt=""
      />
    </div>
    <div class="text"></div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    name: {
      required: true,
      type: String,
      fileName: String,
    },
    fileName: {
      required: true,
      type: String,
      fileName: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./skill.scss";
</style>
