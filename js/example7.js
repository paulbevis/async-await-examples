"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');

//////////////////////////////////////////////////////
//
// Sequential async calls
//
//////////////////////////////////////////////////////


// async

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);

  if (response.status !== 200) {
    throw Error('Invalid username!');
  }
  return await response.json();
}


async function catchUserIssues(userName) {

  const user = await showGitHubUserAsync(userName);
  const repos = await showGitHubUserAsync(`${userName}/repos`);
  console.log(`User: ${user.name}`);
  console.log(`Repos: ${repos.length}`);

}

catchUserIssues('paulbevis');