import { createStore } from 'vuex';
import progressModule from './progressModule';

export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules: {},
  modules: {
    progress: progressModule,
  },
});
