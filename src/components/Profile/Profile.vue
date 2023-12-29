<template>
  <section class="profile">
    <Header :user="user" />
    <Repositories :repos="user.repos" :user="user" />
  </section>
</template>
<script>
import Header from '@/components/Profile/Header/index';
import Repositories from '@/components/Profile/Repositories/index';
// import ProfileImagePlaceholder from '@/assets/placeholder-profile.png';
import { mockUser } from '@/mockUser/mockUser.js';

export default {
  components: { Header, Repositories },
  setup() {
    const user = mockUser;

    return { user };
  },
};
</script>
<style lang="scss">
.profile {
  padding: 1rem 1rem;

  transform: translateY(-3.4375rem);

  max-width: 491px;
  margin: 0 auto;

  @media screen and (min-width: 640px) {
    padding: 1rem 0;
  }

  @media screen and (min-width: 820px) {
    max-width: 800px;
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
    padding: 1rem 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 978px;
  }
}
</style>
