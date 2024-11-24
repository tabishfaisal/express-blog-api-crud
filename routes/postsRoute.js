const express = require('express');
const router = express.Router();
const posts = require('../data/post.js');
const postController = require('../controllers/postController.js');

router.get('/',postController.index);

router.get('/:id',postController.show);

router.post('/',(req,res)=>{
    res.send('list a post')
});

router.post('/:id',(req,res)=>{
    const id=req.params.id;
    res.send(`list The Post with id ${id}`)
});

router.put('/',(req,res)=>{
    res.send('update post')
});

router.put('/:id',(req,res)=>{
    const id=req.params.id;
    res.send(`update Post with id ${id}`)
});
router.patch('/:id', (req, res) => {
    const id= req.params.id;
    res.send(`Modify Post with id : ${id}`);
});

router.delete('/:id', postController.destory);

module.exports = router;

