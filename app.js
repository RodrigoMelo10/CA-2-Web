const express = require('express');
var Post = require('./models/Post');
const html = require("html")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require ('body-parser');
const path = require('path');
require('dotenv/config');



app.use(express.static('public'));

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Importing Routes

const postsRoute = require ('./routes/posts');
app.use ('/posts',postsRoute);




//Creating Routes
app.get('/' , function(req, res) {
  Post.find({}, function (err, posts) {
    if (err) {
      res.status(400).json(err); 
    } 
    console.log(posts)
    res.render('index', {     
        data: posts,
    });
  }); 
});



//Connecting to DataBase
mongoose.connect(process.env.DB_CONNECTION,
 {useUnifiedTopology: true, useNewUrlParser: true }, 
()=>console.log("It is connected to DB")

);

//Listening to the server
app.listen(3000);