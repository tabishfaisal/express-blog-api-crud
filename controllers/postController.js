const posts = require('../data/post');

function index(req,res){
    res.json(posts);
};
function show (req,res){
    const id= parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);
    res.json(post);
};

function destroy (req,res){
        const id = parseInt(req.params.id);
        const postIndex = posts.findIndex(posts => posts.id === id);
        
        if(postIndex === -1){
            res.status(404)
            return res.json({
                error: "post is not found",
                message: "The post isn't found",
            })
        }
    
        posts.splice(postIndex,1)
        res.sendStatus(204)
    };

module.exports = {index,show,destroy};
