"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');

//////////////////////////////////////////////////////
//
// An async function returns a promise, then awaits inside another async function
//
//////////////////////////////////////////////////////


// async

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);
  const user = await response.json();
  return user
}
(async () => {
    displayUserDetails('Async', await showGitHubUserAsync("paulbevis"));
  })();
