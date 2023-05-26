<template>
  <div>
    <h4>Дата регистрации</h4>
    <input type="date" :value="regDate" @input="onDateInput" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      regDate: '',
    };
  },
  methods: {
    ...mapActions({
      setUser: 'progress/setUser',
    }),
    onDateInput(event) {
      // console.log(event.target.value);
      //   this.setUserProgress(this.$store.state, { value: 'aaa' });
      this.setUser(event.target.value);
    },
  },
  mounted() {
    console.log(this.setUserProgress);
  },
};
</script>
<style lang="scss"></style>
