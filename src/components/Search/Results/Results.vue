<template>
  <ul class="search__results display_none">
    <li class="search__results__item">
      <img
        class="search__results__img"
        src="@/assets/placeholder-image-dropdown.png"
        alt="github profile image"
      />
      <div class="search__results__details">
        <h2 class="title">Github</h2>
        <p class="caption">How people build software.</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.display_none {
  display: none;
}

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
