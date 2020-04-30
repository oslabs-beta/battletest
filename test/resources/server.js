const express = require('express');

const PORT = 8000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const data = { 'GOOG': 'google', 'MSFT': 'microsoft' }

app.get('/stockdata', (req, res) => {
    return res.status(200).json({ 'ticker': req.body.ticker })
})

app.post('/stockdata', (req, res) => {
    return res.status(200).json({ 'ticker': req.body.ticker })
})

const server = app.listen(PORT, () => { console.log(`server listening on port: ${PORT}`) });

// console.log(JSON.stringify(app._router.stack.slice(-1)[0].route.path))
// console.log(JSON.stringify(app._router.stack.slice(-1)[0].route.methods))
// console.log(String(app._router.stack.slice(-1)[0].route.stack[0].handle))

// console.log(JSON.stringify(app._router.stack.slice(-2)[0].route.path))
// console.log(JSON.stringify(app._router.stack.slice(-2)[0].route.methods))
// console.log(String(app._router.stack.slice(-2)[0].route.stack[0].handle))

module.exports = { server: server, app: app };
