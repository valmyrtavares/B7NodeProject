const express = require('express')
const router = express.Router();


router.get("/",(req, res)=>{
    res.render('home',{
        'nome':'Valmyr Tavares',
        'idade':50,
        mostrar:false,
         testando: '<h1>Valmyr</h1>',
         testa: '<h2>Valmyr Tavares</h2>',
        ingredientes:[
        
        ],
        interesses:[
            'node','js','html'
        ],
    });
})






module.exports = router;