<template>
  <section class="repos">
    <div class="repos__header">
      <h1 class="user">
        {{ user.name ? user.name : user.login?.toUpperCase() }}
      </h1>
      <p class="caption">{{ user.caption }}</p>
    </div>
    <div v-if="repos.length" class="repos__container">
      <Repository v-for="repo in repos" :repo="repo" :key="repo.title" />
    </div>
    <p v-else>No repository/s available</p>
    <button
      v-if="repos.length < storeRepo.length"
      @click="buttonClickHandler"
      class="repos__button"
    >
      View all repositories
    </button>
  </section>
</template>
<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import Repository from '@/components/Repository/index';
export default {
  props: ['repos', 'user'],
  components: { Repository },
  setup(props) {
    const store = useStore();
    const storeRepo = computed(() => store.state.repos);
    const reposPage = computed(() => store.state.currentRepoPage);

    const buttonClickHandler = () => {
      store.dispatch('showMoreRepos');
    };

    watch(reposPage, () => {
      console.log('store repos length', storeRepo.value.length);
      console.log('props repos length', props.repos.length);
    });

    return { buttonClickHandler, storeRepo };
  },
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.repos {
  padding: 1rem 0;
  text-align: center;

  @media screen and (min-width: 800px) {
  }

  &__header {
    @media screen and (min-width: 640px) {
      text-align: left;
    }

    .user,
    .caption {
      margin: 0;
    }

    .user {
      @include font_size('large');
      font-weight: 500;
      color: $link_water;
      padding-bottom: 0.5rem;
    }

    .caption {
      color: $east_bay;
    }
  }

  &__container {
    margin: 2.25rem auto;
    margin-bottom: 2.8125rem;

    @media screen and (min-width: 640px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 2.25rem;
    }

    @media screen and (min-width: 1024px) {
      gap: 28px;
    }

    @media screen and (min-width: 1028px) {
      gap: 30px;
    }
  }

  &__button {
    @include typography('repo-text');

    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    color: $east_bay;
  }
}
</style>
