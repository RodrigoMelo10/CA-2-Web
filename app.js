const express = require('express');

const app = express();
const mongoose = require("mongoose");
const bodyParser = require ('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

//Importing Routes

const postsRoute = require ('./routes/posts');
app.use ('/posts',postsRoute);




//Creating Routes
app.get('/',(req,res)=> {

res.send ("Hello");

});

//Connecting to DataBase
mongoose.connect(process.env.DB_CONNECTION,
 {useUnifiedTopology: true, useNewUrlParser: true }, 
()=>console.log("It is connected to DB")

);

//Listening to the server
app.listen(3000);