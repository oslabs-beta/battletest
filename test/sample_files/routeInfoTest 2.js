module.exports = routeInfo = {
  '/': {
    method: 'get',
    params: [],
    middleware: [
      '(req, res) => {\n' +
      "  return res.sendFile(path.resolve(__dirname, '../client/index.html'));\n" +
      '}'
    ]
  },
  '/connected': {
    method: 'get',
    params: [],
    middleware: [
      '(req, res, next) => {\n' +
      '  res.locals.say = {\n' +
      "    say: 'Server is connected to front-end'\n" +
      '  }\n' +
      '  return next();\n' +
      '}',
      '(req, res) => {\n' +
      '  console.log(req)\n' +
      '  return res.status(200).send(res.locals.say);\n' +
      '\n' +
      '}'
    ]
  },
  '/users/:id': {
    method: 'put',
    params: [
      [Object]
    ],
    middleware: [
      'async (req, res, next) => {\n' +
      '\n' +
      '  //get user from the request being sent from the front end\n' +
      '  const user = req.params.id;\n' +
      '\n' +
      '  const gitUserUrl = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`\n' +
      '\n' +
      '  // fetch data from api using client_id and client_secret in the query to get access to user information\n' +
      '  await fetch(gitUserUrl)\n' +
      '    .then(response => response.json())\n' +
      '    .then((userInfo) => {\n' +
      '\n' +
      "      // assignment of login, user's gitHub link, and repository link\n" +
      '      res.locals.login = userInfo.login;\n' +
      '      res.locals.userUrl = userInfo.url;\n' +
      '      res.locals.reposUrl = userInfo.repos_url;\n' +
      '\n' +
      '    })\n' +
      '    .catch(error => {\n' +
      '      return next({\n' +
      '        log: `userController.getUser: ERROR: ${error}`,\n' +
      '        message: {\n' +
      "          err: 'userController.getUser: ERROR: Check server logs for details'\n" +
      '        },\n' +
      '      });\n' +
      '    });\n' +
      '\n' +
      '  return next();\n' +
      '}',
      'async (req, res, next) => {\n' +
      '  // const user = req.params.id;\n' +
      '  const {\n' +
      '    user\n' +
      '  } = req.body;\n' +
      '  const password = req.body.userInfo.username.userContacts.userEmail;\n' +
      '  const gitUserUrl = `https://api.github.com/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`;\n' +
      '\n' +
      '  await fetch(gitUserUrl)\n' +
      '    .then(response => response.json())\n' +
      '    .then(repoInfo => {\n' +
      '      res.locals.repoInfo = repoInfo;\n' +
      '    })\n' +
      '    .catch(error => {\n' +
      '      return next({\n' +
      '        log: `userController.getRepos: ERROR: ${error}`,\n' +
      '        message: {\n' +
      "          err: 'userController.getRepos: ERROR: Check server logs for details'\n" +
      '        },\n' +
      '      });\n' +
      '    });\n' +
      '  return next();\n' +
      '}',
      '(req, res) => {\n' +
      '  console.log(req.body)\n' +
      '  // deconstruct login, userUrl and repos_url properties from the res.locals object\n' +
      '  const {\n' +
      '    login,\n' +
      '    userUrl,\n' +
      '\n' +
      '  } = res.locals\n' +
      '  return res.status(200).json({\n' +
      '    login,\n' +
      '    userUrl,\n' +
      '\n' +
      '  });\n' +
      '\n' +
      '}'
    ]
  }
};