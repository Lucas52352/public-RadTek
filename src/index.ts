import app from './app';
import http from 'http';
import mongoose from 'mongoose';
import 'dotenv/config';

const server = http.createServer(app);
mongoose.Promise = Promise;
const connectionDB = async () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log('MongoDB connected');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

server.listen(3000, () => {
    connectionDB()
    console.log("Server running on http://localhost:3000/")
})



