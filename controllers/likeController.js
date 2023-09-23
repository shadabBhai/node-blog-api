const likes = require("../models/likes");
const Post = require("../models/post");


exports.createLike = async(req,res)=>{
    try {
        const  {post , user} = req.body;
        const Like = new likes({
            post, user
        });
        const savedLike = await Like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}}
                                    , {new: true}).populate("likes").exec();

        res.status(200).json({
            post:updatedPost
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}
