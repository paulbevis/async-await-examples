"use strict";


const fetch = require("node-fetch");

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
      displayUserDetails(user);
    })
}


showGitHubUser("paulbevis");





// async

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);
  const user = await response.json();
  displayUserDetails(user);
}

showGitHubUserAsync("paulbevis");













const displayUserDetails = function(user) {
  console.log(user.name);
  console.log(user.location);
};
