const state = {
  loggedIn: false,
  user: null
};

const mutations = {
  logout(state) {
    console.log("logging out ", user)
    state.loggedIn = false;
    state.user = null;
  },
  login(state, { user }) {
    console.log("logging in ", user)
    state.loggedIn = true;
    state.user = user;
  }
};

const actions = {
  logout: ({ commit }) => commit("logout"),
  login: ({ commit }, user) => {
    commit("login", { user })
    return Promise.resolve({...user})
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
