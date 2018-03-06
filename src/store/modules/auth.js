const appSettings = require("tns-core-modules/application-settings");

const state = {
  loggedIn: false,
  user: null
};

const mutations = {
  logout(state) {
    console.log("logging out ", state.user);
    state.loggedIn = false;
    state.user = null;

    // remove the user email if we are logged out
    appSettings.remove("AUTH-INFO");
  },
  login(state, { user }) {
    console.log("logging in ", user);
    state.loggedIn = true;
    state.user = user;

    // save the user email if we are logged in
    appSettings.setString("AUTH-INFO", user.email);
  }
};

//
// Actions are asynchronous, mutations are not!!
//
const actions = {
  /**
   *
   */
  logout: ({ commit }) => commit("logout"),
  /**
   *
   */
  login: ({ commit }, user) => {
    commit("login", { user });

    // return the logged in user information
    return Promise.resolve({ ...user });
  },
  /**
   *
   */
  init: ({ commit }) => {
    // check setting for auth information
    let authString = appSettings.getString("AUTH-INFO");

    // if i have data then do login, else just return
    // with no user information...
    if (authString) {
      console.log("found saved user...", authString)
      let user = { email: authString };
      commit("login", { user });
      // return the logged in user information
      return Promise.resolve({ ...user });
    } else {
      console.log("NO saved user...")
      return Promise.resolve();
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
