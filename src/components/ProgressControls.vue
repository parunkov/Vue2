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
      <h4>Привязано устройств:</h4>
      <select :value="devices" @change="changeGadgetValue">
        <option v-for="option in deviceOptions" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="control-item control-item_content_warranty">
      <label>
        <input type="checkbox" :checked="warrantyConfirmed" @input="confirmWarranty" />
        <h4>Ввести дату покупки</h4>
      </label>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      deviceOptions: [
        { value: 0, text: '0' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4 и более' },
      ],
    };
  },
  computed: {
    ...mapState({
      regDate: (state) => state.progress.regDate,
      ageConfirmed: (state) => state.progress.ageConfirmed,
      profileFilling: (state) => state.progress.profileFilling,
      devices: (state) => state.progress.devices,
      warrantyConfirmed: (state) => state.progress.warrantyConfirmed,
    }),
  },
  methods: {
    ...mapActions({
      setUser: 'progress/setUser',
      setAge: 'progress/setAge',
      setSecret: 'progress/setSecret',
      setGadget: 'progress/setGadget',
      setWarranty: 'progress/setWarranty',
    }),
    onDateInput({ target }) {
      this.regDate = target.value;
      this.setUser(target.value);
    },
    confirmAge({ target }) {
      this.setAge(target.checked);
    },
    fillProfile({ target }) {
      this.setSecret(target.value);
    },
    changeGadgetValue({ target }) {
      console.log(target.value);
      this.setGadget(target.value);
    },
    confirmWarranty({ target }) {
      this.setWarranty(target.checked);
    },
  },
};
</script>
<style lang="scss" scoped>
.control-item {
  display: flex;
  margin-bottom: 30px;
  &_content_age,
  &_content_warranty {
    padding-left: 10px;
  }
  label {
    display: flex;
    cursor: pointer;
  }
  h4 {
    margin-left: 10px;
    margin-right: 10px;
  }
  input[type='range'] {
    cursor: pointer;
  }
}
</style>
