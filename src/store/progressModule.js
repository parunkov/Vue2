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
      const setSecretProgress = (newValue, min, max) => {
        if (payload > min && payload <= max && newValue !== state.userData.secret) {
          state.userData.secret = newValue;
        }
      };

      setSecretProgress('secretGold', 0, 1);
      setSecretProgress('secretPlatinum', 1, 2);
      setSecretProgress('secret', 2, 10);
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
  },

  namespaced: true,
};
