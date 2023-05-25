<template>
  <div class="kam-197544-popin">
    <div class="kam-197544-popin__arrow" @click="$emit('closeProgressPopin')">
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 19L15.4753 25.4816L26.5 19" stroke="#9A9A9A" stroke-width="2" />
      </svg>
    </div>
    <div class="kam-197544-popin__image">
      <img :src="data.image" />
    </div>
    <div class="kam-197544-popin__title">{{ data.title }}</div>
    <div class="kam-197544-popin__text">{{ data.text }}</div>
    <div class="kam-197544-popin__bar-text-wrapper">
      <div class="kam-197544-popin__bar-text">{{ data.barSartText }}</div>
      <div class="kam-197544-popin__bar-text">{{ data.barEndText }}</div>
    </div>
    <div class="kam-197544-popin__bar">
      <div class="kam-197544-popin__bar-progress" :style="`width: ${data.barProgress}`"></div>
    </div>
    <a v-if="data.buttonLink" :href="data.buttonLink" class="kam-197544-popin__button">{{
      data.buttonText
    }}</a>
    <div
      v-else
      class="kam-197544-popin__button kam-197544-popin__button_type_close"
      @click="$emit('closeProgressPopin')"
    >
      {{ data.buttonText }}
    </div>
    <div
      v-if="data.isCloseButton"
      class="kam-197544-popin__close-button"
      @click="$emit('closeProgressPopin')"
    >
      Закрыть
    </div>
    <div class="kam-197544-popin__cross" @click="$emit('closeProgressPopin')">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.1787 17.1545C20.5278 17.8054 19.4726 17.8054 18.8217 17.1545L10.8841 9.21689C10.3959 8.72874 9.60446 8.72874 9.11631 9.21689V9.21689C8.62815 9.70505 8.62815 10.4965 9.1163 10.9847L17.0539 18.9223C17.7048 19.5731 17.7048 20.6284 17.0539 21.2793L9.21741 29.1158C8.72925 29.6039 8.72925 30.3954 9.21741 30.8836V30.8836C9.70556 31.3717 10.497 31.3717 10.9852 30.8836L18.8217 23.0471C19.4726 22.3962 20.5278 22.3962 21.1787 23.0471L29.0152 30.8836C29.5034 31.3717 30.2948 31.3717 30.783 30.8836V30.8836C31.2711 30.3954 31.2711 29.6039 30.783 29.1158L22.9465 21.2793C22.2956 20.6284 22.2956 19.5731 22.9465 18.9223L30.8841 10.9847C31.3722 10.4965 31.3722 9.70505 30.8841 9.21689V9.21689C30.3959 8.72874 29.6045 8.72874 29.1163 9.21689L21.1787 17.1545Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style></style>
