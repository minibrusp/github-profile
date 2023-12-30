<template>
  <form class="search" role="search" @submit.prevent="">
    <label class="search__box">
      <span
        ><img
          class="search__box__icon"
          src="@/assets/Search.svg"
          alt="search icon"
      /></span>
      <input
        class="search__box__input"
        type="search"
        placeholder="username"
        role="searchbox"
        v-model="searchedUser"
        @input="onSearch"
      />
    </label>
    <Results v-if="searchedUser" :user="foundUser" />
  </form>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import debounce from 'lodash/debounce';
import Results from './Results/index';

export default {
  components: { Results },
  setup() {
    const store = useStore();
    const searchedUser = ref(null);
    const foundUser = computed(() => store.state.foundUser);

    const onSearch = debounce(async () => {
      if (!searchedUser.value) return;
      try {
        await store.dispatch('getUser', searchedUser.value);
      } catch (err) {
        console.log(err.message);
      }
    }, 300);

    const resetSearchBox = () => {
      searchedUser.value = '';
    };

    return { foundUser, searchedUser, onSearch, resetSearchBox };
  },
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.search {
  position: relative;
  max-width: 484px;
  margin: 0 auto;

  &__box {
    position: relative;
    @include flexCustom(row, flex-start, center);
    gap: 0.5rem;
    width: 100%;
    padding: 0.90625rem 1rem;
    background-color: $midnight_express;
    border: 2px solid $midnight_express;
    border-radius: 0.75rem;

    &:focus-within {
      border: 2px solid $royal_blue;
    }

    &__icon {
      display: block;
      width: 100%;
    }

    &__input {
      @include typography('body');
      display: block;
      width: 100%;
      color: $link_water;
      background-color: $midnight_express;
      border: none;
      outline: none;

      &::placeholder {
        color: $east_bay;
      }
    }
  }
}
</style>
