// import
const fetch = require('node-fetch');


// gitHub app authorization 
const client_id = 'b0d490755cdeeb3ee807';
const client_secret = '4428248231e3640b286bc56c9347aee336173d56';

gitController = {};

/*
 *  Not the complete method. I am figuring out the routes at the moment
 */

gitController.sayConnected = (req, res, next) => {
  res.locals.say = {
    say: 'Server is connected to front-end'
  }
  return next();
}


gitController.getUser = async (req, res, next) => {

  //get user from the request being sent from the front end
  const user = req.params.id;

  const gitUserUrl = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`

  // fetch data from api using client_id and client_secret in the query to get access to user information
  await fetch(gitUserUrl)
    .then(response => response.json())
    .then((userInfo) => {

      // assignment of login, user's gitHub link, and repository link
      res.locals.login = userInfo.login;
      res.locals.userUrl = userInfo.url;
      res.locals.reposUrl = userInfo.repos_url;

    })
    .catch(error => {
      return next({
        log: `userController.getUser: ERROR: ${error}`,
        message: {
          err: 'userController.getUser: ERROR: Check server logs for details'
        },
      });
    });

  return next();
}

gitController.getRepos = async (req, res, next) => {
  // const user = req.params.id;
  const {
    user
  } = req.body;
  const password = req.body.userInfo.username.userContacts.userEmail;
  const gitUserUrl = `https://api.github.com/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`;

  await fetch(gitUserUrl)
    .then(response => response.json())
    .then(repoInfo => {
      res.locals.repoInfo = repoInfo;
    })
    .catch(error => {
      return next({
        log: `userController.getRepos: ERROR: ${error}`,
        message: {
          err: 'userController.getRepos: ERROR: Check server logs for details'
        },
      });
    });
  return next();
};


module.exports = gitController;