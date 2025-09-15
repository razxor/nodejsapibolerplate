// DB Connection
const connectDB = require('../database/db');
const jwt = require('jsonwebtoken');

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
        const token = createToken(
            {
                userId : result.insertedId,
                email : data.email,
                role: data.role
            },
        );
        res.status(200).json({
            success: true,
            token: token,
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
    const user = await collection.findOne({ 'email': email, 'password': password });
    if (user) {
         const token = createToken(
            user
        );

        res.status(200).json({
            success : true,
            token : token,
            message: 'Login Successful',
            user: user
        });
    } else {
        res.status(401).json({
            message: 'Invalid Credentials'
        });
    }
};

const createToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'  // 1h
        }
    );
}

module.exports = { registerUser, loginUser };

