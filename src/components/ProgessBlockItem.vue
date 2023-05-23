<template>
  <div>
    <div class="kam-197544-main-content__progress kam-197544-main-content__progress_type_${key}">
      <div class="kam-197544-main-content__progress-image">
        <img :src="image" />
      </div>
      <div class="kam-197544-main-content__progress-text">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: Text,
      required: true,
    },
    text: {
      type: Text,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
