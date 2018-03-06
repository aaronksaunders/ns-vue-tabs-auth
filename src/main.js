import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

console.log(store.state)
if ( store.state.auth.isLoggedIn ) {
  router.replace("/home");
} else {
  router.replace("/login");
}

new Vue({

  router,

  store,

}).$start();
