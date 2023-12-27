<template>
  <main>
    <Header />
    <Profile />
  </main>
</template>

<script>
import Header from '@/components/Header/index';
import Profile from '@/components/Profile/index';

export default {
  name: 'App',
  components: { Header, Profile },
};
</script>

<style lang="scss"></style>
