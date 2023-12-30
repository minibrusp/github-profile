<template>
  <ul v-if="user.id" @click="clickHandler" class="search__results">
    <li class="search__results__item">
      <img
        class="search__results__img"
        :src="user.avatar_url"
        :alt="user.name + '\'s' + ' avatar'"
      />
      <div class="search__results__details">
        <h2 class="title">
          {{ user.name ? user.name : user.login?.toUpperCase() }}
        </h2>
        <p class="caption">{{ user.bio }}</p>
      </div>
    </li>
  </ul>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['user'],
  setup() {
    const store = useStore();
    const foundUser = computed(() => store.state.foundUser);

    const clickHandler = async () => {
      // console.log(foundUser.value);
      await store.dispatch('init', foundUser.value.login);
      await store.dispatch('resetFoundUser');
      await store.dispatch('resetReposPage');
    };

    return { clickHandler, foundUser };
  },
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.search__results {
  margin: 0;
  padding: 0 0.5rem;
  width: 100%;
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 5;
  border-radius: 0.75rem;

  background-color: $black_russian;
  cursor: pointer;

  &:hover {
    background-color: $paua;
  }

  &__item {
    padding: 0.5rem 0;

    @include flexCustom(row, flex-start, center);
    gap: 1rem;
  }

  &__img {
    width: 100%;
    max-width: 72px;
    max-height: 72px;
    display: block;
  }

  &__details {
    @include flexCustom(column, center, flex-start);
    gap: 0.5rem;

    .title,
    .caption {
      margin: 0;
    }

    .title {
      @include font_size('body');
      font-weight: 400;
    }

    .caption {
      @include font_size('small');
      color: $east_bay;
    }
  }
}
</style>
