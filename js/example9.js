"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');

//////////////////////////////////////////////////////
//
// Promise all async calls - if all promises are resolved then it returns an array of promises - if one fails it stops...
//
//////////////////////////////////////////////////////

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);

  if (response.status !== 200) {
    throw Error('Invalid username!');
  }
  return await response.json();
}


async function catchUserIssues(userName) {

  const [user, repos] = await Promise.all([
    showGitHubUserAsync(userName),
    showGitHubUserAsync(`${userName}/repos`)]);

  console.log(`User: ${user.name}`);
  console.log(`Repos: ${repos.length}`);

}

catchUserIssues('paulbevis');