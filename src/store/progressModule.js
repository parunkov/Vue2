export default {
  state: () => ({
    userData: {
      user: 'iron',
      age: 'ageDisabled',
      secret: 'secretDisabled',
      gadget: 'gadgetDisabled',
      warranty: 'warrantyDisabled',
    },
    regDate: '',
    ageConfirmed: false,
    profileFilling: 0,
    devices: 0,
    warrantyConfirmed: false,
  }),

  mutations: {
    SET_USER(state, payload) {
      state.regDate = payload;
      const regDate = new Date(payload);
      const dateDiff = (new Date() - regDate) / 1000 / 60 / 60 / 24;

      const setUserProgress = (newValue, days, end, dateDiff) => {
        if (dateDiff > days && dateDiff <= end && newValue !== state.userData.user) {
          state.userData.user = newValue;
        }
      };

      setUserProgress('iron', 0, 14, dateDiff);
      setUserProgress('bronze', 14, 30, dateDiff);
      setUserProgress('silver', 30, 60, dateDiff);
      setUserProgress('gold', 60, 91, dateDiff);
      setUserProgress('platinum', 91, 182, dateDiff);
      setUserProgress('emerald', 182, 365, dateDiff);
      setUserProgress('brilliant', 365, 36500, dateDiff);
    },

    SET_AGE(state, payload) {
      state.ageConfirmed = payload;
      const ageValue = payload ? 'age' : 'ageDisabled';
      state.userData.age = ageValue;
    },

    SET_SECRET(state, payload) {
      state.profileFilling = payload;
      let secretLevel = 0;
      if (+payload > 2 && +payload <= 5) secretLevel = 1;
      if (+payload > 5 && +payload < 8) secretLevel = 2;
      if (+payload === 8) secretLevel = 3;

      const setSecretProgress = (newValue, min, max) => {
        if (secretLevel > min && secretLevel <= max && newValue !== state.userData.secret) {
          state.userData.secret = newValue;
        }
      };

      setSecretProgress('secretDisabled', -1, 0);
      setSecretProgress('secretGold', 0, 1);
      setSecretProgress('secretPlatinum', 1, 2);
      setSecretProgress('secret', 2, 10);
    },

    SET_GADGET(state, payload) {
      state.devices = payload;
      let newGadget;

      if (+payload > 3) {
        newGadget = 'gadget';
      } else if (+payload === 3) {
        newGadget = 'gadgetEmerald';
      } else if (+payload === 2) {
        newGadget = 'gadgetPlatinum';
      } else if (+payload === 1) {
        newGadget = 'gadgetGold';
      } else {
        newGadget = 'gadgetDisabled';
      }

      if (newGadget !== state.userData.gadget) {
        state.userData.gadget = newGadget;
      }
    },

    SET_WARRANTY(state, payload) {
      console.log(payload);
      state.warrantyConfirmed = payload;
      const warrantyValue = payload ? 'warranty' : 'warrantyDisabled';
      state.userData.warranty = warrantyValue;
    },
  },

  actions: {
    setUser({ commit }, payload) {
      commit('SET_USER', payload);
    },
    setAge({ commit }, payload) {
      commit('SET_AGE', payload);
    },
    setSecret({ commit }, payload) {
      commit('SET_SECRET', payload);
    },
    setGadget({ commit }, payload) {
      commit('SET_GADGET', payload);
    },
    setWarranty({ commit }, payload) {
      commit('SET_WARRANTY', payload);
    },
  },

  namespaced: true,
};
