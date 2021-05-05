const express = require('express')
const homeController = require('../controllers/homeController')
const usersController = require("../controllers/userController")
const postController = require('../controllers/postController.js')
const imageMiddleware = require('../middlewares/imageMiddlewares');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();
//const { route } = require('../app');

router.get("/" ,homeController.index)

router.get('/users/login', usersController.login)
router.post('/users/login', usersController.loginAction)
router.get('/users/logout', usersController.logout)


router.get('/users/register', usersController.register)
router.post('/users/register', usersController.registerAction)

router.get('/post/add', authMiddleware.isLogged, postController.add)
router.post('/post/add',
    authMiddleware.isLogged,
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.addAction
)

router.get('/post/:slug/edit', authMiddleware.isLogged,postController.edit)
router.post('/post/:slug/edit',
    authMiddleware.isLogged,
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.editAction)

router.get('/post/:slug',postController.view) 





module.exports = router;