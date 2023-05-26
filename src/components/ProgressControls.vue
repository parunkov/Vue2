<template>
  <div>
    <div class="control-item">
      <h4>Дата регистрации</h4>
      <input type="date" :value="regDate" @input="onDateInput" />
    </div>
    <div class="control-item control-item_content_age">
      <label>
        <input type="checkbox" :checked="ageConfirmed" @input="confirmAge" />
        <h4>Подтвердить возраст</h4>
      </label>
    </div>
    <div class="control-item">
      <h4>{{ `Профиль заполнен (${profileFilling} из 8) : 0` }}</h4>
      <input type="range" min="0" max="8" step="1" :value="profileFilling" @input="fillProfile" />
      <h4>8</h4>
    </div>
    <div class="control-item">
      <h4></h4>
      <input type="text" />
    </div>
    <div class="control-item">
      <h4></h4>
      <input type="text" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  // data() {
  //   return {
  //     profileFilling: 0,
  //   };
  // },
  computed: {
    ...mapState({
      regDate: (state) => state.progress.regDate,
      ageConfirmed: (state) => state.progress.ageConfirmed,
      profileFilling: (state) => state.progress.profileFilling,
    }),
  },
  methods: {
    ...mapActions({
      setUser: 'progress/setUser',
      setAge: 'progress/setAge',
      setSecret: 'progress/setSecret',
    }),
    onDateInput(event) {
      this.regDate = event.target.value;
      this.setUser(event.target.value);
    },
    confirmAge(event) {
      console.log(event.target.checked);
      this.setAge(event.target.checked);
    },
    fillProfile(event) {
      const filling = event.target.value;
      console.log(filling);
      this.setSecret(filling);
    },
  },
  mounted() {
    // console.log(this.$store);
    // console.log(this.setUserProgress);
  },
};
</script>
<style lang="scss" scoped>
.control-item {
  display: flex;
  margin-bottom: 30px;
  &_content_age {
    padding-left: 10px;
  }
  label {
    display: flex;
  }
  h4 {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
