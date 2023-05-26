export default {
  state: () => ({
    userData: {
      user: 'iron',
      age: 'ageDisabled',
      secret: 'secretDisabled',
      gadget: 'gadgetDisabled',
      warranty: 'warrantyDisabled',
    },
  }),
  mutations: {
    SET_USER(state, payload) {
      // console.log(state);
      // console.log(payload);
      const regDate = new Date(payload);
      const dateDiff = (new Date() - regDate) / 1000 / 60 / 60 / 24;
      console.log('🚀 ~ file: progressModule.js:17 ~ SET_USER ~ dateDiff:', dateDiff);
      console.log(state.userData.user);

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
  },
  actions: {
    setUser({ commit }, payload) {
      commit('SET_USER', payload);
    },
  },
  namespaced: true,
};
