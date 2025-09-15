require('dotenv').config();

const exprees = require('express');
const app = exprees();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Middlewares
app.use(exprees.json());


// Routes
const authRoutes = require('./routes/auth-routes');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
})