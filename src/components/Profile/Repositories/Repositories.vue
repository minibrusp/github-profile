<template>
  <section class="repos">
    <div class="repos__header">
      <h1 class="user">{{ user.name }}</h1>
      <p class="caption">{{ user.caption }}</p>
    </div>
    <div class="repos__container">
      <Repository v-for="repo in repos" :repo="repo" :key="repo.title" />
    </div>
    <button class="repos__button">View all repositories</button>
  </section>
</template>
<script>
import Repository from '@/components/Repository/index';
export default {
  props: ['repos', 'user'],
  components: { Repository },
  // setup() {
  //   return { repos };
  // },
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
