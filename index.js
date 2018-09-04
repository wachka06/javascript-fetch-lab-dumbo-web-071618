function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  document.querySelector('#results').innerHTML = json
}

function forkRepo() {
  const url = 'https://developer.github.com/v3/repos/'
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = getToken();

  fetch(url + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '38fac40dc67fe36b89b1a9ab867769407a0efec2';
}
