"use strict";


const fetch = require("node-fetch");


require("babel-core").transform("code", {
  presets: ["es2017"]
});

/////////////////////////////
////// promise
////////////////////////////


function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    })
}


// showGitHubUser("paulbevis");





/////////////////////////////
////// async
////////////////////////////

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}

showGitHubUserAsync("paulbevis");