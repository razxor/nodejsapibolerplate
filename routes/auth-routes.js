const exprees = require('express');
const router = exprees.Router();

const { registerUser, loginUser } = require('../controllers/AuthController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router