<template>
  <header role="banner" class="header">
    <div class="header__hero">
      <img
        class="header__hero__img"
        src="@/assets/hero-image.png"
        alt="hero image"
      />
    </div>
    <Search />
  </header>
</template>
<script>
import Search from '@/components/Search/index';

export default {
  components: { Search },
};
</script>
<style lang="scss">
.header {
  position: relative;
  left: 0;
  top: 0;
  padding: 2rem 1rem;
  /* aspect-ratio: 16 / 9; */

  max-height: 240px;
  min-height: 240px;

  &__hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    &__img {
      width: 100%;
      /* aspect-ratio: 16 / 9; */
      display: block;

      max-height: 240px;
      min-height: 240px;
    }
  }
}
</style>
