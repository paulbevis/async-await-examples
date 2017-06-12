"use strict";

const fetch = require("node-fetch");
const displayUserDetails = require('./utils');

//////////////////////////////////////////////////////
//
// Async methods in a class
//
//////////////////////////////////////////////////////


// async
class GitHubAPI {

  async showGitHubUserAsync(handle) {
    const url = `https://api.github.com/users/${handle}`;

    const response = await
    fetch(url);
    const user = await
    response.json();
    return user
  }
}

(async () => {
  const gitHubAPI = new GitHubAPI();
  displayUserDetails('Async', await gitHubAPI.showGitHubUserAsync("paulbevis"));
})();
