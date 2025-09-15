const exprees = require('express');
const router = exprees.Router();

const { registerUser, loginUser } = require('../controllers/AuthController');
const { getHomePageData } = require('../controllers/HomeController');

const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

router.get('/home', AuthMiddleware, getHomePageData);

module.exports = router