<template>
  <header class="profile__header">
    <div class="profile__header__avatar">
      <Avatar :avatar="user.avatar" :altText="avatarAltText" />
    </div>
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

export default {
  props: ['user'],
  components: { Avatar, Stat },
  setup(props) {
    const avatarAltText = props.user.name + "'s avatar";

    return { avatarAltText };
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
</style>
