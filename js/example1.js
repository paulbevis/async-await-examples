"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');


//////////////////////////////////////////////////////
//
// A promise example, followed by its async equivalent
//
//////////////////////////////////////////////////////


// Promise

function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;

  fetch(url)
    .then(response => response.json())
    .then(user => {
      displayUserDetails('Promise', user);
    })
}

showGitHubUser("paulbevis");




// async

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);
  const user = await response.json();
  displayUserDetails('Async', user);
}

showGitHubUserAsync("paulbevis");



















