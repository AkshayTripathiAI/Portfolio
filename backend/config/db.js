const mongoose = require('mongoose');

// Cache the connection across serverless invocations so each request doesn't reconnect.
let cached = global.mongooseConnection;
if (!cached) {
    cached = global.mongooseConnection = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not set');
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 8000 })
            .then((m) => {
                console.log(`MongoDB Connected: ${m.connection.host}`);
                return m;
            })
            .catch((error) => {
                cached.promise = null; // allow a retry on the next request
                throw error;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

module.exports = connectDB;
