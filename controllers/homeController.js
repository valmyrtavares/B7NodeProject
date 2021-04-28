


exports.index = (req, res)=>{
    res.render('home',{
        'nome':'Valmyr Tavares',
        'idade':50,
        userInfo:req.userInfo,
        mostrar:false,
         testando: '<h1>Valmyr</h1>',
         testa: '<h2>Valmyr Tavares</h2>',
        ingredientes:[
        
        ],
        interesses:[
            'node','js','html'
        ], 
    });
}