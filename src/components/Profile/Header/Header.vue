<template>
  <header v-if="user" class="profile__header">
    <transition name="avatar" mode="out-in">
      <div class="profile__header__avatar">
        <Avatar
          :v-if="user.avatar_url"
          :avatar="user.avatar_url"
          :altText="user.name + '\'s avatar'"
        />
      </div>
    </transition>
    <dl class="profile__header__stats">
      <Stat item="Followers" :value="user.followers" />
      <Stat item="Following" :value="user.following" />
      <Stat item="Location" :value="user.location" />
    </dl>
  </header>
</template>
<script>
import Avatar from '@/components/Avatar/index';
import Stat from '@/components/Stat/index';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['user'],
  components: { Avatar, Stat },
  setup() {
    const store = useStore();
    const storeError = computed(() => store.state.error);

    return { storeError };
  },
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.profile__header {
  @include flexCustom(column, center, center);

  @media screen and (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.25rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }

  @media screen and (min-width: 1280px) {
    gap: 2.375rem;
  }

  &__avatar {
    border: 8px solid $midnight_express;
    border-radius: 1rem;

    background-color: $black_russian;
  }

  &__stats {
    @include inlineFlexCustom(column, center, center);

    gap: 0.875rem;
    margin: 0.5rem auto;

    @media screen and (min-width: 640px) {
      align-items: flex-start;
      margin: 50px 0 0.5rem 0;
    }

    @media screen and (min-width: 800px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    @media screen and (min-width: 1024px) {
      gap: 1.25rem;
    }
  }
}

/* avatar transitions  */
.avatar-enter-from {
  opacity: 0;
  /* transform: scale(0.6); */
}
.avatar-leave-to {
  opacity: 0;
}
.avatar-enter-active,
.avatar-leave-active {
  transition: all 0.3s ease;
}
</style>
