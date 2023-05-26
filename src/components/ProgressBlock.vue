<template>
  <div class="kam-197544-main-content">
    <div class="kam-197544-main-content__container">
      <div class="kam-197544-main-content__header">
        <BackArrow />
        <div class="kam-197544-main-content__title">Мои достижения</div>
      </div>
      <div class="kam-197544-main-content__body">
        <ProgessBlockItem
          v-for="(item, key) in itemsProps"
          :key="key"
          :image="item.image"
          :text="item.text"
          :name="key"
          @openProgressPopin="onItemClick"
        />
      </div>
    </div>
    <ProgressPopin
      v-if="popinOpened"
      :data="popinData"
      @closeProgressPopin="closePopin"
      :visible="popinVisible"
    />
  </div>
</template>

<script>
import BackArrow from './UI/BackArrow.vue';
import ProgessBlockItem from './ProgessBlockItem.vue';
import { mapState } from 'vuex';
import { data } from '@/data/data';
import ProgressPopin from './ProgressPopin.vue';

export default {
  components: { BackArrow, ProgessBlockItem, ProgressPopin },
  data() {
    return {
      itemsProps: {
        user: { text: 'Пользователь', image: '' },
        age: { text: '18+', image: '' },
        secret: { text: 'Без секретов', image: '' },
        gadget: { text: 'Инспектор&nbsp;Гаджет', image: '' },
        warranty: { text: 'Гарантия', image: '' },
      },
      popinOpened: false,
      popinVisible: true,
      popinData: {},
    };
  },
  computed: {
    ...mapState({
      // userState: (state) => state.progress.userData.user,
      // ageState: (state) => state.progress.userData.age,
      // secret: (state) => state.progress.userData.secret,
      // gadget: (state) => state.progress.userData.gadget,
      // warranty: (state) => state.progress.userData.warranty,
      // registrationDate: (state) => state.progress.userData.registrationDate,
      userData: (state) => state.progress.userData,
    }),
  },
  methods: {
    onItemClick(name) {
      // console.log(name);
      // console.log(this.userData);
      this.popinData = data[this.userData[name]];
      this.popinVisible = true;
      console.log(this.popinData);
      this.popinOpened = true;
    },
    closePopin() {
      this.popinVisible = false;
      setTimeout(() => {
        this.popinOpened = false;
      }, 500);
    },
  },
  created() {
    for (const key in this.itemsProps) {
      this.itemsProps[key].image = data[this.userData[key]].image;
    }
  },
};
</script>

<style lang="scss"></style>
