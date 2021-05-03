const { response } = require('express');
const mongoose = require('mongoose')
const Post = mongoose.model("Post")


exports.index = async (req, res)=>{
    
    let responseJson = {
        posts:[],
        tags:[],
        tag:''
    };
   
    responseJson.tag = req.query.t
    let postFilter =(typeof responseJson.tag != 'undefined')?{tags:responseJson.tag}:{};
    console.log(typeof responseJson.tag)
    

    const tags = await Post.getTagsList();
        for(let i in tags){
            if(tags[i]._id == responseJson.tag){
                tags[i].class = 'selected'
            }
        }


    responseJson.tags = tags;
    

    const posts = await Post.find(postFilter);
    responseJson.posts = posts
    
    res.render('home',responseJson );
}