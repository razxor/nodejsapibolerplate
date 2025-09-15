const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URL);
const connectDB = async () => {
    try {        
        await client.connect();
        console.log('MongoDB connected');
        // Return the raw MongoDB driver's MongoClient object
        return client;

    } catch (err) {
        console.log("Mongo DB Failed to Connect");
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB