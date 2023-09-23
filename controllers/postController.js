const Post = require("../models/post");

exports.createPost = async (req, res)=>{
    try {
        const {title  , body} = req.body;
        const post  = new Post({
            title, body
        });
        const savedPost = await post.save();
        res.status(200).json(
            {
                success: true,
                post:savedPost,
                message:"Entry created Sucessfully"
            }
        )
    } catch (error) {
        res.status(500)
        .json({
            sucess:false,
            data:"internal server error",
            message:error.message,

        })
    }
 
}

exports.getAllPost = async(req,res)=>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            Post:posts,
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
        })
    }
}
