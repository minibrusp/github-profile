<template>
  <div class="avatar">
    <img v-if="avatar" :src="avatar" :alt="altText" />
    <img
      v-else
      src="@/assets/placeholder-profile.png"
      alt="placeholder image"
    />
  </div>
</template>
<script>
export default {
  props: ['avatar', 'altText'],
};
</script>
<style lang="scss">
.avatar img {
  width: 104px;
  height: 104px;
}
</style>
