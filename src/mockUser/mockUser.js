import ProfileImagePlaceholder from '@/assets/placeholder-profile.png';

export const mockUser = {
  name: 'GitHub',
  caption: 'How people build software',
  avatar: ProfileImagePlaceholder,
  followers: 27839,
  following: 0,
  location: 'San Francisco, CA',
  repos: [
    {
      title: '.github',
      description: 'Community health files for the @GitHub organization',
      license: null,
      forks: 2369,
      stars: 703,
      lastUpdated: 'updated 4 days ago', // string for now
    },
    {
      title: 'accessibility-alt-text-bot',
      description:
        'An action to remind users to add alt text on Issues, Pull Requests, and Discussions',
      license: 'MIT',
      forks: 7,
      stars: 50,
      lastUpdated: 'updated 3 days ago', // string for now
    },
    {
      title: 'accessibilityjs',
      description: 'Client side accessibility error scanner.',
      license: 'MIT',
      forks: 72,
      stars: 2181,
      lastUpdated: 'updated 4 days ago', // string for now
    },
    {
      title: 'actions-cheat-sheet',
      description: 'A cheat sheet for GitHub Actions',
      license: 'MIT',
      forks: 26,
      stars: 194,
      lastUpdated: 'updated 4 days ago', // string for now
    },
  ],
};
