import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    counter,
    auth
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;