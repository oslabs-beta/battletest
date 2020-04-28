const db = require('../models/MessageModel.js')

module.exports = {
    postMessage: (req, res, next) => {
        const arr = [req.body.post_message, req.body.post_password]
        const nestedBody = req.body.name.food.icecream;
        const query = `INSERT INTO messages (message, password) VALUES ($1, $2) RETURNING *`
        db.query(query, arr, (err, result) => {
            if (err) next({
                log: 'error in postMessage/dbquery',
                status: 400,
                err: { err }
            })
            res.locals.post = result.rows[0]
            return next();
        })
    },
    getMessages: (req, res, next) => {
        const query = `SELECT * FROM messages`
        const arr = []
        db.query(query, arr, (err, result) => {
            if (err) next({
                log: 'error in getMessages/dbquery',
                status: 400,
                err: { err }
            })
            res.locals.posts = result.rows
            return next()
        })
    },
    deleteMessage: (req, res, next) => {
        const arr = [req.body.post_id]
        const query = `DELETE FROM messages WHERE id = $1`
        db.query(query, arr, (err, result) => {
            if (err) next({
                log: 'error in deleteMessage/dbquery',
                status: 400,
                err: { err }
            })
            return next()
        })
    }
};
