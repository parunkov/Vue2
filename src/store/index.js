import { createStore } from 'vuex';
import progressModule from './progressModule';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    progress: progressModule,
  },
  plugins: [createPersistedState()],
});
