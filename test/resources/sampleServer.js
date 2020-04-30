const path = require('path');
const express = require('express');
//const cookieParser = require('cookie-parser');
const messageController = require('./server/controllers/messageController')
const authController = require('./server/controllers/authController')

const PORT = 3434;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use(cookieParser())

app.use(express.static('./views'))
app.use(express.static('./assets'))

app.get('/getMessages',
    messageController.getMessages,
    (req, res) => {
        return res.status(200).json(res.locals.posts);
    }
)

app.post('/postMessage', 
    messageController.postMessage,
    authController.setCookie,
    (req, res) => {
        return res.status(200).json(res.locals.post)
    }
)

app.delete('/deleteMessage',
    authController.checkCookie,
    messageController.deleteMessage,
    (req, res) => {
        return res.status(200).send('successfully deleted')
    }
)

app.use((err, req, res, next) => {
    if (err) {
        const defaultErr = {
          log: 'Express error handler caught unknown middleware error',
          status: 400,
          message: { err: 'An error occurred in the server' }
        };
        const errorObj = Object.assign(defaultErr, err);
        res.status(errorObj.status).json(errorObj.message);
      }
})

const server = app.listen(PORT, () => { console.log(`server listening on port: ${PORT}`)});

//console.log(String(require.cache['/Users/soobinkim/codesmith/app-assessment-mod-1/server/controllers/messageController.js'].exports.postMessage));
// const dispatchStack = app._router.stack.filter(a => a.name === 'bound dispatch');

// const middlewareObject = {}

// for (n of dispatchStack) {
//     middlewareObject[n.route.path] = [];
//     for (i of n.route.stack) {
//         middlewareObject[n.route.path].push(i.handle)
//     }
// }
// console.log('hello1')
// console.log(Reflect.getOwnPropertyDescriptor(middlewareObject['/deleteMessage'][0]))
// console.log('hello2')
// console.log(String(middlewareObject['/deleteMessage'][1]))

//console.log(JSON.stringify(app._router.stack.slice(-2)[0].route.stack[0]))
//console.log(JSON.stringify(app._router.stack.slice(-1)[0].route.methods))
//console.log(String(app._router.stack.slice(-1)[0].route.stack[0].handle))

module.exports = { app: app, server: server };