// DB Connection
const connectDB = require('../database/db');

const registerUser = async (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({
            message: 'Invalid Data',
        });
    }
    const client = await connectDB();
    const collection = client.db('api_project').collection('users');
    const result = await collection.insertOne(data);

    if (result.acknowledged) {
        res.status(200).json({
            message: 'User Registered Successfully',
        })
    } else {
        res.status(500).json({
            message: 'User Registration Failed',
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!req.body) {
        return res.status(400).json({
            message: 'Invalid Data',
        });
    }
    const client = await connectDB();
    const collection = client.db('api_project').collection('users');
    const users = await collection.findOne({ 'email': email, 'password': password });    
    if(users) {
        res.status(200).json({                  
            message: 'Login Successful',
            user: users
        });
    } else {
        res.status(401).json({
            message: 'Invalid Credentials'
        });                     
    }
};

module.exports = { registerUser, loginUser };

