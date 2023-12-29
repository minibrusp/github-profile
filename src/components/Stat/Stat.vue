<template>
  <div class="stat">
    <dt class="stat__item">{{ item }}</dt>
    <dd class="stat__value">{{ value !== null ? value : 'N / A' }}</dd>
  </div>
</template>
<script>
export default {
  props: ['item', 'value'],
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.stat {
  background-color: $black_russian;
  padding: 0.5625rem 1.25rem;

  @include inlineFlexCustom(row, flex-start, center);
  @include font_size('stats');
  font-weight: 600;

  border-radius: 12px;

  &__item {
    margin: 0;
    padding: 0.5rem 1.25rem 0.5rem 0;
    border-right: 1px solid $cloud_burst;
    color: $cloud_burst;
  }
  &__value {
    margin: 0;
    padding: 0.5rem 0 0.5rem 1rem;
    color: $link_water;
  }
}
</style>
