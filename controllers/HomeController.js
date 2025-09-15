
const getHomePageData = (req, res) => {
    const  authUser  = req.authUser;
    console.log(authUser);
    res.status(200).json({
        message: 'Welcome to the Home Page',
        data: {
            info: 'This is some sample data for the home page.'
        }
    });
}

module.exports = { getHomePageData };