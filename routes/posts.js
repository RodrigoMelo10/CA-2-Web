const express = require ('express');
const router = express.Router();
const Post = require ('../models/Post');

//get back all the posts
router.get('/', function(req, res) {
  Post.find({}, function (err, posts) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.render('index', {     
        data: posts,
    });
  }); 
});

//sending information to the database
router.post('/',( req, res) => {
   var sec = "";
    switch(req.body.sec_n){
        case '0':
            sec = "DRINKS";
        case '1':
            sec = "HIGIENE";
        case '2':
            sec = "ELECTRONICS";
        case '3':
            sec = "SWEET";
        case '4':
            sec = "FOOD";
        case '5':
            sec = "BOOK";
        case '6':
            sec = "CLEANING";
    }
   const post = new Post({
      section: sec,
      ttitle: req.body.item,
      date: req.body.price
   })

post.save()
//returning promise
.then(data =>{
    res.json(data); //display on screen
})
.catch(err =>{
    
     res.json({message: err});
});

});//Specific post
 router.get('/:postId', async (req,res) =>{
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err){
      res.json({ message: err})
  }
  });


//Deleting a Post
router.post('/delete',async(req,res)=>{
    console.log(req.body.id)
    try{
     const removedPost= await Post.deleteOne({_id: req.body.id })
      res.redirect('back');
    }catch (err){
        res.json({message: err});
    }
 });


    //Updating a post
    router.patch('/:postId', async (req,res)=>{
        try{
    const updatedPost= await Post.updateOne(
        {_id: req.params.postId },
        {$set:{ title: req.body.title}}
    );   
       res.json(updatedPost);
        }catch (err){
            res.json({message: err});
        }
    })

module.exports = router; 