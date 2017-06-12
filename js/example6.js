"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');

//////////////////////////////////////////////////////
//
// An async function always returns a rejected promise if an exception is thrown within it.
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


async function catchUserIssues(user) {
  try {
    const result = await showGitHubUserAsync(user);
    displayUserDetails('Async', result);
  }
  catch (err) {
    console.log(`Error: ${err}`)
  }
}

catchUserIssues('ppp!!');