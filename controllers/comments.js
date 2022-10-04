const Comment = require('../models/comment')

module.exports = {

    createComment: async (req,res) => {
        try {
            await Comment.create({
                comment: req.body.comment,
                post: req.params.id,
                user: req.user.id,
            });
            console.log('comment has been added');
            res.redirect('/post'+req.params.id)
        } catch(err) {
            console.log(err)
        }
    },
    //add delete, modify comment
}