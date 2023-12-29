<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/no-unused-components -->
<template>
  <main :v-if="user">
    <Header />
    <Profile />
  </main>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Header from '@/components/Header/index';
import Profile from '@/components/Profile/index';

export default {
  name: 'App',
  components: { Header, Profile },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    onMounted(async () => {
      // await store.dispatch('initUser', 'GitHub');
      await store.dispatch('init', 'GitHub');
    });

    return { user };
  },
};
</script>

<style lang="scss"></style>
