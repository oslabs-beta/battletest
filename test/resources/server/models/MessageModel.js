// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'postgres://ysznxpfa:YdiDeVqK6k39hRsS-Xnm24ju-ej5UHVo@drona.db.elephantsql.com:5432/ysznxpfa';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;

//const { Pool } = require('pg')
//const pool = new Pool({ connectionString: URI })

//pool.on('connect', () => console.log('Connected to pgDb'))


module.exports = {
    query: (query, params, cb) => {
        return pool.query(query, params, cb)
    }
}; // <-- export your model

`
Below is the query that was used to create Messages database:
CREATE TABLE Messages (
    id SERIAL PRIMARY KEY not null,
    message VARCHAR(100) not null,
    password VARCHAR(100) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`