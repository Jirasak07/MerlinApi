const express = require('express')
const app = express()
const PORT =4000
const sql = require('mssql')
const config ={
    user:"merlin",
    password:"Admin1629",
    server:"thaiserve.database.windows.net",
    database:"dbproject"
}
app.listen(PORT ,()=>{
    console.log("API Running")
})
app.get('/main',(req,res,)=>{
    res.send("This is Main")
})
app.get('/',(req,res)=>{
    res.send("Good Good Api")
})
app.get('/a',(req,res)=>{
    res.send("This is A")
})

module.exports = app