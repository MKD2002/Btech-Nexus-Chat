import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/AuthRoutes.js';

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


app.use("/api/auth",authRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

mongoose.connect(database_URl).then(()=>console.log('Database connected')).catch(err=>console.log(err.message));
