<template>
  <section class="profile">
    <Header :user="user" />
    <Repositories :repos="filteredRepos" :user="user" />
  </section>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Header from '@/components/Profile/Header/index';
import Repositories from '@/components/Profile/Repositories/index';

export default {
  components: { Header, Repositories },
  setup() {
    const store = useStore();
    const MAX_REPO = computed(() => store.state.MAX_REPO_PER_PAGE);
    const currentRepoPage = computed(() => store.state.currentRepoPage);

    const numRepoToShow = computed(() => {
      return MAX_REPO.value * currentRepoPage.value;
    });
    const user = computed(() => store.state.user);
    const repos = computed(() => store.state.repos);

    const filteredRepos = computed(() => {
      return repos.value.filter((repo, index) => {
        if (index + 1 <= numRepoToShow.value) {
          return repo;
        }
      });
    });

    return { user, repos, filteredRepos };
  },
};
</script>
<style lang="scss">
.profile {
  padding: 1rem 1rem;

  transform: translateY(-3.4375rem);

  max-width: 491px;
  margin: 0 auto;

  @media screen and (min-width: 640px) {
    padding: 1rem 0;
  }

  @media screen and (min-width: 820px) {
    max-width: 800px;
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
    padding: 1rem 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 978px;
  }
}
</style>
