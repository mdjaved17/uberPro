const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err.message);
        });
}

module.exports = connectDB;
