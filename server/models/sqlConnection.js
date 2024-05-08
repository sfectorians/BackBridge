const mysql = require("mysql2")

const config = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"sgwrm"
}
const db = mysql.createConnection(config)

db.connect((err)=>{
    if(err) console.log(err)
        else console.log("mysql Database connected")
})

module.exports = db