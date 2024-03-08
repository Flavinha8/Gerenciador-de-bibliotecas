const mysql = require("mysql2")

const pool = mysql.createConnetion({
    host: "localhost",
    user: "root",
    password: "",
    database: "biblioteca_knex"
}).promise()

async function connection () {
    await pool.connect((err) => {
        if(err) {
            throw err
        }
        console.log("MySql connected...")
    })
    pool.destroy()
}

module.exports = {connection, pool}