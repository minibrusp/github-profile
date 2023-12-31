/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/vue';
import Avatar from '@/components/Avatar/Avatar.vue';
import Image from '@/assets/placeholder-image.jpg';

describe('Avatar component', () => {
  it('Renders Avatar altText prop values when passed ', async () => {
    const { getByAltText } = render(Avatar, {
      props: {
        avatar: '@/assets/placeholder-image.jpg',
        altText: 'User Avatar',
      },
    });

    getByAltText('User Avatar');
  });
  it('Renders Avatar placeholder altText when image prop is not passed ', async () => {
    const { getByAltText } = render(Avatar);

    getByAltText('placeholder image');
  });
});
