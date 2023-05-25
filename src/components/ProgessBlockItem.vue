<template>
  <div>
    <div class="kam-197544-main-content__progress" @click="$emit('openProgressPopin', name)">
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
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
