const express = require('express');
const app = express();
const bodyParse = require('body-parser');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})

app.post('/api/posts', (req, res, next)=>{
    const post = req.body;
    console.log(post);
    res.status(201).json(
        {
            message:'Post added sucessfully'
        }
    )
})

app.get('/api/posts', (req,res)=>{
    const posts = [
        {id:'p1111', title:'Fitst Title from server', content:'content from server'},
        {id:'p2222', title:'second Title from server', content:'content from server second'},
        {id:'p333', title:'another Title from server', content:'content from server another'}
    ];

    res.status(200).json({
        message: 'Post Fetched Successfully',
        posts:posts
    })
});

module.exports = app; 