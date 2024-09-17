import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/AuthRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import contactsRoutes from './routes/ContactRoutes.js';
import setupSocket from './socket.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const database_URl = process.env.DATABASE_URL;

app.use(cors({
    origin:[process.env.ORIGIN],
    methods:['GET','POST','PUT','DELETE','PATCH'],
    credentials:true
}));
app.use("/uploads/profiles",express.static("/uploads/profiles"))
app.use(cookieParser());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route to serve profile images
app.get("/uploads/profiles/:pathname", (request, response) => {
    const filename = request.params.pathname;
    const directoryPath = path.join(__dirname, 'uploads', 'profiles');

    // Full path to the requested file
    const filePath = path.join(directoryPath, filename);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return response.status(404).send("File not found");
        }

        // Serve the file
        response.sendFile(filePath);
    });
});

app.use("/api/auth",authRoutes);
app.use("/api/contacts",contactsRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

setupSocket(server);

mongoose.connect(database_URl).then(()=>console.log('Database connected')).catch(err=>console.log(err.message));
