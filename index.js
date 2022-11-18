const express = require('express')
const app = express()
const PORT =4000
app.listen(PORT ,()=>{
    console.log("API Running")
})
app.get('/',(req,res)=>{
    res.send("Good Good Api")
})
app.get('/a',(req,res)=>{
    res.send("This is A")
})

module.exports = app