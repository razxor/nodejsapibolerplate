const exprees = require('express');
const router = exprees.Router();

const { registerUser, loginUser } = require('../controllers/AuthController');
const { getHomePageData } = require('../controllers/HomeController');
const { getDashboardData } = require('../controllers/AdminController');

const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

router.get('/home', AuthMiddleware, getHomePageData);
router.get('/admin/dashboard', AuthMiddleware, AdminMiddleware, getDashboardData);

module.exports = router