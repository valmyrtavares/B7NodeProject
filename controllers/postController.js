const mongoose = require('mongoose')
const Post = mongoose.model('Post')



exports.add = (req, res)=>{
    res.render('postAdd')
};

exports.addAction = async(req, res) =>{
    req.body.tags = req.body.tags.split(',').map(t=>t.trim())

    req.body.author = req.user._id; 
    const post = new Post(req.body)  
    

    try{
        await post.save();

    } catch(error){

        req.flash('error', 'Erro: '+error.message)
        res.redirect('/post/add')
        return;
    }

   req.flash('success','Post Salvo com sucesso')
    res.redirect('/') 
} 


 
 exports.edit = async (req, res)=>{
     const post = await Post.findOne({slug:req.params.slug})     
     res.render('postEdit',{post})
    }
    
    exports.editAction = async(req, res)=>{
     req.body.slug = require('slug')(req.body.title,{lower:true})
     req.body.tags = req.body.tags.split(',').map(t=>t.trim())

      try{
          const post = await Post.findOneAndUpdate(
              {slug:req.params.slug},
              req.body,
              {
                  new:true,
                  runValidators:true 
              });

      } catch(error){
        req.flash('error', 'Erro: '+error.message)
        res.redirect('/post/'+req.params.slug+'/edit')
        return;
      }  
         req.flash('success', 'Post atualizado com sucesso')
         res.redirect('/')
    }      

    exports.view = async(req, res)=>{

       const post = await Post.findOne({slug:req.params.slug})

        res.render('view',{post})
    }