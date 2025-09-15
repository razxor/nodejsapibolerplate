
const getDashboardData = (req, res) => {
    const  authUser  = req.authUser;
    console.log(authUser);
    res.status(200).json({
        message: 'Welcome to Admin Dashboard',
        data: {
            info: 'This is some sample data for the Dashboard.'
        }
    });
}

module.exports = { getDashboardData };