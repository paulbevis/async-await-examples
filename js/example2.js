"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');

//////////////////////////////////////////////////////
//
// An async function returns a promise
//
//////////////////////////////////////////////////////


// async

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);
  const user = await response.json();
  return user
}

showGitHubUserAsync("paulbevis").then(user => displayUserDetails('Async', user));
