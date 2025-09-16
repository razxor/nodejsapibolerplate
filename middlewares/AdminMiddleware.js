const AdminMiddleware = (req, res, next) => {    
    if (req.authUser.role != 'admin') {
        return res.status(401).json(
            {
                success: false,
                message: 'Access denied! Admin resource. You are not authorized to access this resource'
            }
        );
    }
    next();
}
module.exports = AdminMiddleware;