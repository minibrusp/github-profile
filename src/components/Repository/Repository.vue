<template>
  <section @click="console.log(repo.name)" class="repository">
    <a
      class="repository__link"
      :href="repo.html_url"
      target="_blank"
      title="to github repository url"
      rel="noreferrer noopener"
    >
      <h2 class="repository__title">{{ repo.name }}</h2>
      <p class="repository__description">{{ repo.description }}</p>
      <ul class="repository__infos">
        <li v-if="repo.license" class="repository__infos__item license">
          <img src="@/assets/Chield_alt.svg" alt="license icon" />
          <span>{{ repo.license.spdx_id }}</span>
        </li>
        <li v-if="repo.forks" class="repository__infos__item fork">
          <img src="@/assets/Nesting.svg" alt="fork icon" />
          <span>{{ repo.forks_count.toLocaleString() }}</span>
        </li>
        <li v-if="repo.stargazers_count" class="repository__infos__item star">
          <img src="@/assets/Star.svg" alt="star icon" />
          <span>{{ repo.stargazers_count.toLocaleString() }}</span>
        </li>
        <li v-if="repo.updated_at" class="repository__infos__item update">
          <span
            >updated
            {{
              formatDistanceToNow(new Date(repo.updated_at), {
                addSuffix: true,
              }).replace('about', '')
            }}</span
          >
        </li>
      </ul>
    </a>
  </section>
</template>
<script>
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
export default {
  props: ['repo'],
  setup() {
    return { formatDistanceToNow };
  },
};
</script>
<style lang="scss">
@import '@/sass/utils/_mixins.scss';
@import '@/sass/utils/_colors.scss';

.repository {
  margin: 2.25rem auto;
  background: linear-gradient(90deg, $black_russian, $paua);
  padding: 1rem 1.125rem 0.5625rem 1.125rem;
  border-radius: 0.625rem;
  color: $east_bay;
  text-align: left;
  cursor: pointer;

  @media screen and (min-width: 640px) {
    max-width: 491px;
    margin: 0;
    width: 100%;
  }

  @media screen and (min-width: 820px) {
    max-width: 350px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 424px;
    padding: 1rem 1.125rem 0.8125rem 1.125rem;
  }

  @media screen and (min-width: 1280px) {
    max-width: 474px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &__title,
  &__description,
  &__infos {
    margin: 0;
  }

  &__link {
    display: block;
    width: 100%;
    text-decoration: none;
    color: $east_bay;
  }

  &__title {
    @include font_size('repo-title');
    font-weight: 500;
    color: $link_water;
    margin: 0.4375rem 0;
  }

  &__description {
    @include font_size('repo-text');
    margin: 0.75rem 0;
    line-height: 1.2;
  }

  &__infos {
    padding: 0;
    list-style-type: none;
    margin: 0.5rem 0;
    @include font_size('repo-text');
    font-weight: 500;
    @include inlineFlexCustom(row, flex-start, center);
    gap: 0.5rem;
    flex-wrap: wrap;

    &__item {
      @include flexCustom(row, center, center);
      gap: 0.25rem;

      img {
        display: block;
        width: 24px;
        height: 24px;
      }

      &.update {
        @include font_size('repo-small');

        @media screen and (min-width: 640px) {
          padding-left: 1.0625rem;
        }

        @media screen and (min-width: 820px) {
          padding-left: 0;
        }

        @media screen and (min-width: 1024px) {
          padding-left: 1.0625rem;
        }
      }
    }
  }
}
</style>
