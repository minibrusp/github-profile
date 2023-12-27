<template>
  <div class="stat">
    <dt class="stat__item">{{ item }}</dt>
    <dd class="stat__value">{{ value }}</dd>
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
  padding: 0.5rem;

  @include inlineFlexCustom(row, flex-start, center);

  &__item {
    margin: 0;
  }
  &__value {
    margin: 0;
  }
}
</style>
