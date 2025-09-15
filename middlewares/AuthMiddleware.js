const jwt = require('jsonwebtoken');
const AuthMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json(
            {
                success: false,
                message: 'Access denied. No token provided. Please login to continue'
            }
        );
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return res.status(403).json(
                {
                    success: false,
                    message: 'Invalid Token' 
                }
            );
        }
        req.authUser = authData;
        next();
    });
}
module.exports = AuthMiddleware;