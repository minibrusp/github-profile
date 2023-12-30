import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: '',
    foundUser: '',
    repos: [],
  },
  mutations: {
    setFoundUser(state, payload) {
      state.foundUser = payload;
    },
    setFoundUserIntoUser(state) {
      state.user = state.foundUser;
      state.foundUser = '';
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setRepos(state, payload) {
      state.repos = payload;
    },
    resetFoundUser(state) {
      state.foundUser = '';
    },
  },
  actions: {
    async init(context, username) {
      const res = await Promise.all([
        fetch(`https://api.github.com/users/` + username).then((resp) =>
          resp.json()
        ),
        fetch(`https://api.github.com/users/${username}/repos`).then((resp) =>
          resp.json()
        ),
      ]);

      if (res.length > 0) {
        context.commit('setUser', res[0]);
        context.commit('setRepos', res[1]);
      } else {
        // context.commit('resetFoundUser');
        throw new Error(res.message);
      }

      // console.log(res.length > 0);
      console.log(res[1]);
    },

    async searchUser(context, username) {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );
      const result = await res.json();

      if (res.ok) {
        context.commit('setFoundUser', result);
        console.log('user loaded: ');
      } else {
        console.log(result);
        throw new Error(result.message);
      }
    },

    async getUser(context, username) {
      const res = await fetch(`https://api.github.com/users/` + username);
      const result = await res.json();
      if (res.ok) {
        context.commit('setFoundUser', result);
        console.log('user loaded: ');
      } else {
        console.log(result);
        throw new Error(result.message);
      }
    },

    async getRepos(context, username) {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const result = await res.json();

      if (res.ok) {
        context.commit('setRepos', result);
        console.log('user loaded: ');
      } else {
        console.log(result);
        throw new Error(result.message);
      }
    },

    async resetFoundUser(context) {
      context.commit('resetFoundUser');
    },
  },
});

export default store;
