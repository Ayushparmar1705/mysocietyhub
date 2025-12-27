
const { Pool } = require("pg");
require("dotenv").config();
console.log(process.env.POSTGRES_HOST)
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD
});

pool.on("connect", () => {
    console.log("Postgres is connected");
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}

