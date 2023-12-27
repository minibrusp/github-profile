<template>
  <section class="search" role="search">
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
      />
    </label>
    <Results />
  </section>
</template>
<script>
import Results from './Results/index';

export default {
  components: { Results },
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.search {
  position: relative;

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
