const Post = require("../models/Post");
const Comment = require("../models/Comment")

module.exports = {
    getProfile: async (req, res) => {
        try {
          const posts = await Post.find({ user: req.user.id });
          res.render("profile.ejs", { posts: posts, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
      getFeed: async (req, res) => {
        try {
          const posts = await Post.find().sort({ createdAt: "desc" }).lean(); 
          res.render("feed.ejs", { posts: posts }); 
        } catch (err) {
          console.log(err);
        }
      },
      getPost: async (req, res) => {
        try {
          const post = await Post.findById(req.params.id); 
          const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
          res.render("post.ejs", { post: post, user: req.user, comments: comments });
        } catch (err) {
          console.log(err);
          
        }
      },
    createPost: async (req,res) => {
        try {
            await Post.create({
                title: req.body.title,
                user: req.user.id,
                department: req.body.department,
                carrier: req.body.carrier,
                destination: req.body.destination,
                ttype: req.body.ttype,
                ltime: req.body.ltime,
                transit: req.body.transit,
                special: req.body.special,
            });
            console.log('Post has been added')
            res.redirect('/profile')
        } catch(err) {
            console.log(err)
        }
    },
    deletePost: async(req,res) => {
        try {
            let post = await Post.findById({ _id: req.params.id});
            await Post.remove({ _id: req.params.id});
            console.log('Deleted Post')
            res.redirect('/profile')
        } catch(err) {
            res.redirect('/profile')
        }
    }
}