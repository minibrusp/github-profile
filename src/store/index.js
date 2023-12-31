import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: '',
    foundUser: '',
    repos: [],
    currentRepoPage: 1,
    MAX_REPO_PER_PAGE: 4,
    error: '',
    isLoading: false,
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
    resetRepos(state) {
      state.repos = [];
    },
    resetFoundUser(state) {
      state.foundUser = '';
    },
    resetRepoPage(state) {
      state.currentRepoPage = 1;
    },
    incrementRepoPage(state) {
      state.currentRepoPage += 1;
    },

    resetError(state) {
      state.error = '';
    },

    setError(state, payload) {
      state.error = payload;
    },

    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async init(context, username) {
      try {
        context.commit('resetError');
        context.commit('setIsLoading', true);

        const res = await Promise.all([
          fetch(`https://api.github.com/users/` + username, {
            method: 'GET',
            headers: {
              authorization: {
                Token: `Bearer ${process.env.VUE_APP_GIT_ACCESS_TOKEN}`,
              },
            },
          }).then((resp) => resp.json()),
          fetch(`https://api.github.com/users/${username}/repos`, {
            method: 'GET',
            headers: {
              authorization: {
                Token: `Bearer ${process.env.VUE_APP_GIT_ACCESS_TOKEN}`,
              },
            },
          }).then((resp) => resp.json()),
        ]);

        console.log(res);

        if (res.length && !res[1].message) {
          context.commit('setUser', res[0]);
          context.commit(
            'setRepos',
            res[1].sort(
              (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
            )
          );
          context.commit('setIsLoading', false);
        } else {
          throw new Error(res[1].message);
        }
      } catch (error) {
        context.commit('setError', error.message);
        context.commit('setIsLoading', false);
      }
    },

    async searchUser(context, username) {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`,
        {
          method: 'GET',
          headers: {
            authorization: {
              Token: `Bearer ${process.env.VUE_APP_GIT_ACCESS_TOKEN}`,
            },
          },
        }
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
      const res = await fetch(`https://api.github.com/users/` + username, {
        headers: {
          authorization: {
            Token: `Bearer ${process.env.VUE_APP_GIT_ACCESS_TOKEN}`,
          },
        },
      });
      const result = await res.json();
      if (res.ok) {
        context.commit('setFoundUser', result);
        console.log('user loaded: ');
      } else {
        console.log(result);
        throw new Error(result.message);
      }
    },

    async resetRepos(context) {
      context.commit('resetRepos');
    },

    async resetFoundUser(context) {
      context.commit('resetFoundUser');
    },

    async showMoreRepos(context) {
      context.commit('incrementRepoPage');
    },

    async resetReposPage(context) {
      context.commit('resetRepoPage');
    },

    async setIsLoading(context, bool) {
      context.commit('setIsLoading', bool);
    },
  },
});

export default store;
