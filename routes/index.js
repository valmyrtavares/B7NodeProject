const express = require('express')
const router = express.Router();


router.get("/",(req, res)=>{
    res.render('home',{
        'nome':'Valmyr Tavares',
        'idade':50,
        mostrar:false,
        ingredientes:[
            {nome:"Azeite", preco:22 },
            {nome:"Feijão", preco:32 },
        ]
    });
})






module.exports = router;