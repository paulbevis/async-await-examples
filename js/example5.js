"use strict";

const fetch = require("node-fetch");

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
  const user = await response.json();

  return user
}

showGitHubUserAsync("xx!!")
  .then(user => console.log(user))
  .catch(err => console.error(err.message));
