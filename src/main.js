import Vue from "nativescript-vue";

import router from "./router";

import store from "./store";

import "./styles.scss";

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

console.log(store.state);
store.dispatch("auth/init").then(user => {
  if (user) {
    router.replace("home");
  } else {
    router.replace("login");
  }
});

new Vue({
  router,
  store,
  template: `
  <Page class="page">
  <ActionBar class="action-bar" title="Hello World">
    <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
  </ActionBar><page-router></page-router></Page>`
}).$start();
