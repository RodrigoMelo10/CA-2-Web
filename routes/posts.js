const express = require ('express');
const router = express.Router();
const Post = require ('../models/Post');

//get back all the posts
router.get('/', function(req, res) {
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

//sending information to the database
router.post('/',( req, res) => {
   const post = new Post({
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
router.delete('/:postId',async(req,res)=>{
    try{
     const removedPost= await Post.remove({_id: req.params.postId })
      res.json(removedPost);
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