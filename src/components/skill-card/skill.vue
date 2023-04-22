<template>
  <div class="main-container">
    <div class="image">
      <img :src="require(`../../assets/${fileName}.svg`)" alt="" />
    </div>
    <div class="text"></div>
  </div>
</template>

<script>
export default {
  name: SkillCard,
  props: {
    image: {
      required: true,
      type: String,
      fileName: String,
    },
    name: {
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
