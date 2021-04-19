const express = require('express');
const app = express()
const path = require('path')
const publicDirectory = path.join(__dirname,'./baggy_website')
app.get('/', (req, res) =>{
   res.render('index')
})
// PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening in port ${port}`))
// app.listen(3000, ()=> console.log("listening in port 3000"))
