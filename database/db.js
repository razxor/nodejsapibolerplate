const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL).then((result) => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log("Mongo DB Failed to Connect");
        process.exit(1);
    });
}

module.exports = connectDB