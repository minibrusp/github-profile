<template>
  <div>
    <img :src="avatar" :alt="altText" />
  </div>
</template>
<script>
export default {
  props: ['avatar', 'altText'],
};
</script>
<style lang=""></style>
