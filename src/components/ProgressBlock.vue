<template>
  <div>
    <div class="kam-197544-main-content">
      <div class="kam-197544-main-content__container">
        <div class="kam-197544-main-content__header">
          <BackArrow />
          <div class="kam-197544-main-content__title">Мои достижения</div>
        </div>
        <div class="kam-197544-main-content__body">
          <ProgessBlockItem image="aaa" text="hhh" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackArrow from './UI/BackArrow.vue';
import ProgessBlockItem from './ProgessBlockItem.vue';
import { mapState } from 'vuex';
// import { data } from '@/data/data';

export default {
  components: { BackArrow, ProgessBlockItem },
  data() {
    return {
      itemsProps: {
        user: { text: 'Пользователь', image: '' },
        age: { text: '18+', image: '' },
        secret: { text: 'Без секретов', image: '' },
        gadget: { text: 'Инспектор&nbsp;Гаджет', image: '' },
        warranty: { text: 'Гарантия', image: '' },
      },
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.progress.userData.user,
      age: (state) => state.progress.userData.age,
      secret: (state) => state.progress.userData.secret,
      gadget: (state) => state.progress.userData.gadget,
      warranty: (state) => state.progress.userData.warranty,
      registrationDate: (state) => state.progress.userData.registrationDate,
    }),
  },
  created() {
    console.log(this.$store);
    // for (const key in this.itemsProps) {
    //   this.itemsProps[key].image = data[this.$store.data[key]].image;
    // }
  },
};
</script>

<style lang="scss"></style>
