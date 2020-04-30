const db = require('../models/MessageModel.js')

module.exports = {
    setCookie: (req, res, next) => {
        res.cookie('pass', req.body.post_password)
        return next()
    }, 
    checkCookie:  (req, res, next) => {
        const arr = [ req.body.post_id ]
        const query = `SELECT * FROM Messages WHERE id = $1`
        db.query(query, arr, (err, result) => {
            if (err) next({
                log: 'error in checkCookie/dbquery',
                status: 400,
                err: { err }
            })
            else if (result.rows.length === 0) { return next({
                log: 'error in checkCookie/no post_id exists',
                status: 400,
                err: { err }
            })}
            else {
                const pwFromClient = req.cookies.pass
                const pwInStore = result.rows[0].password
                console.log(pwFromClient, pwInStore)
                if (pwFromClient === pwInStore) { 
                    return next() 
                }
                else { return next({
                    log: 'error in checkCookie/pw does not match',
                    status: 400,
                    err: { err }
                })}
            }
        })
    }
}