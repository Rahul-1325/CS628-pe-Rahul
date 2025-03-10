const mongoose = require('mongoose');
require('dotenv').config();  // Ensure dotenv is loaded

const connectDB = async () => {
    try {
        const uri = process.env.ATLAS_URI;
        if (!uri) {
            throw new Error("ATLAS_URI is not defined. Check your .env file.");
        }

        await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
