const express = require('express')
const homeController = require('../controllers/homeController')
const usersController = require("../controllers/userController")
const postController = require('../controllers/postController.js')

const router = express.Router();
const imageMiddleware = require('../middlewares/imageMiddlewares')

router.get("/" ,homeController.index)
router.get('/users/login', usersController.login)

router.get('/post/add', postController.add)
router.post('/post/add',
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.addAction
)

router.get('/post/:slug/edit',postController.edit)
router.post('/post/:slug/edit',
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.editAction)

router.get('/post/:slug',postController.view) 





module.exports = router;