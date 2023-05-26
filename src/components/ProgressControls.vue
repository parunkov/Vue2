<template>
  <div>
    <div class="control-item">
      <h4>Дата регистрации</h4>
      <input type="date" :value="regDate" @input="onDateInput" />
    </div>
    <div class="control-item">
      <label>
        <input type="checkbox" :checked="ageConfirmed" @input="confirmAge" />
        <h4>Подтвердить возраст</h4>
      </label>
    </div>
    <div class="control-item">
      <h4></h4>
      <input type="text" />
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
  //     regDate: '',
  //   };
  // },
  computed: {
    ...mapState({
      regDate: (state) => state.progress.regDate,
      ageConfirmed: (state) => state.progress.ageConfirmed,
    }),
  },
  methods: {
    ...mapActions({
      setUser: 'progress/setUser',
      setAge: 'progress/setAge',
    }),
    onDateInput(event) {
      this.regDate = event.target.value;
      this.setUser(event.target.value);
    },
    confirmAge(event) {
      console.log(event.target.checked);
      this.setAge(event.target.checked);
    },
  },
  mounted() {
    console.log(this.$store);
    // console.log(this.setUserProgress);
  },
};
</script>
<style lang="scss" scoped>
.control-item {
  display: flex;
  margin-bottom: 30px;
  label {
    display: flex;
  }
}
</style>
