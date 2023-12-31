/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/vue';
import Stat from '@/components/Stat/Stat.vue';

describe('Stat component', () => {
  it('renders item props when passed', async () => {
    const { getByText } = render(Stat, {
      props: { item: 'Followers', value: 333 },
    });

    getByText('Followers');
  });
  it('renders value props when passed', async () => {
    const { getByText } = render(Stat, {
      props: { item: 'Followers', value: 333 },
    });

    getByText(333);
  });
});
