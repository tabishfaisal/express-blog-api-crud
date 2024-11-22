const express = require('express');
const app = express();
const postsRoute = require('./routes/postsRoute.js');
const PORT = 4000;


app.use('/posts',postsRoute);

app.listen(PORT , ()=>{
    console.log("server is running");
})