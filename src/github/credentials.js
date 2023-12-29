import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.VUE_APP_GIT_ACCESS_TOKEN,
});

export default octokit;
