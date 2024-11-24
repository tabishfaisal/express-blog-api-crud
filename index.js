const express = require('express');
const app = express();
const PORT = 3000;
const postrouter = require('./routes/postsRoute');

app.use('/posts',postrouter);

app.listen(PORT, ()=>{
    console.log('server is runnning');

});