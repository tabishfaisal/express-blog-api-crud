const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('list of posts')
});

router.get('/:id',(req,res)=>{
    const id= req.params.id;
    res.send(`list of post with id:${id}`);
});

router.post('/',(req,res)=>{
    res.send('list a post')
});

router.post('/:id',(req,res)=>{
    const id=req.params.id;
    res.send(`list The Post with id ${id}`)
});

router.put('/',(req,res)=>{
    res.send('Put a new post')
});

router.put('/:id',(req,res)=>{
    const id=req.params.id;
    res.send(`Put new Post with id ${id}`)
});

module.exports = router;

