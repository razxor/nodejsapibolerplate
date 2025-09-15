require('dotenv').config();

const exprees = require('express');
const app = exprees();
const PORT = process.env.PORT || 4000;

// DB Connection
const connectDB = require('./database/db');
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Middlewares
app.use(exprees.json());

app.post('/register', (req, res) => {
    console.log(req.body);
    // res.send('Hello World!');
    res.json({
        message: 'User Registered Successfully',
    })
});

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
})