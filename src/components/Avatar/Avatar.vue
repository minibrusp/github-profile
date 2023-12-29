<template>
  <div>
    <img v-if="avatar" :src="avatar" :alt="altText" />
    <img
      v-else
      src="@/assets/placeholder-image-dropdown.png"
      alt="placeholder image"
    />
  </div>
</template>
<script>
export default {
  props: ['avatar', 'altText'],
};
</script>
<style lang="scss" scoped>
img {
  width: 104px;
  height: 104px;
}
</style>
