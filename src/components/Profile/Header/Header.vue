<template>
  <header class="profile__header">
    <Avatar />
    <dl>
      <Stat item="Followers" :value="27839" />
      <Stat item="Following" :value="0" />
      <Stat item="Followers" :value="27839" />
    </dl>
  </header>
</template>
<script>
import Avatar from '@/components/Avatar/index';

// testing
import Stat from '@/components/Stat/index';

export default {
  components: { Avatar, Stat },
};
</script>
<style lang="scss"></style>
