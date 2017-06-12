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

  const userPromise = showGitHubUserAsync(userName);
  const reposPromise = showGitHubUserAsync(`${userName}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(`User: ${user.name}`);
  console.log(`Repos: ${repos.length}`);

}

catchUserIssues('paulbevis');