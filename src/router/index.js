import Vue from "nativescript-vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home";
import HelloWorld from "../components/HelloWorld";
import Counter from "../components/Counter";
import LoginComponent from "../components/user/LoginComponent";
import Tab1Details from "../components/tabs/tab1/TabOneDetails";
import Tab2Details from "../components/tabs/tab2/TabTwoDetails";

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        title: "Home"
      }
    },

    {
      path: "/login",
      component: LoginComponent,
      meta: {
        title: "Login"
      }
    },


    {
      path: "/tab1-details",
      component: Tab1Details
    },
    {
      path: "/tab2-details",
      component: Tab2Details
    },
    {
      path: "/hello",
      component: HelloWorld,
      meta: {
        title: "Hello World"
      }
    },
    {
      path: "/counter",
      component: Counter,
      meta: {
        title: "Counter"
      }
    },
    { path: "*", redirect: "/home" }
  ]
});


module.exports = router;
