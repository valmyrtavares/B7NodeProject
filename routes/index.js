const express = require('express')


const router = express.Router();
router.get("/",(req, res)=>{
    res.send("Olha mundo")
})

router.get('/sobre',(req, res)=>{
    res.send("Pagina Sobre")
})

module.exports = router;