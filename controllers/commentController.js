const  comment = require("../models/comments");
const Post = require("../models/post");

exports.createComment = async(req,res)=>{
    try{
        const {post, user,body} = req.body ;

        const newComment  = new comment({
            post , user , body 
        });

        const saveComment = await newComment.save();

        const updatedPost = await Post.findByIdAndUpdate(post , {$push:{comments : saveComment._id}}, {new:true})
                                                        .populate("comments").exec();

        res.status(200).json({
            post : updatedPost
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}