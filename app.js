const express = require('express');

const app = express();
const mongoose = require("mongoose");
require('dotenv/config')

app.get('/',(req,res)=> {

res.send ("Hello");


});
app.get('/posts',(req,res)=> {

res.send ("Posts message");
});

mongoose.connect(process.env.DB_CONNECTION,
 {useUnifiedTopology: true, useNewUrlParser: true }, 
()=>console.log("It is connected to DB")

);


app.listen(3000);