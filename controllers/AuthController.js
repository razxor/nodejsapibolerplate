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
    const client = await connectDB();
    const collection = client.db('api_project').collection('users');
    const users = await collection.find({ 'email': email, 'password': password }).toArray();
    console.log(users);
};

module.exports = { registerUser, loginUser };

