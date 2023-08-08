import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import galleryRoutes from "./routes/gallery.js"
import cors from "cors";


const app =express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/v1", galleryRoutes);

app.use(express.static("public/upload"))

const PORT = 8000;
connectDB();

app.listen(PORT,()=>{
     console.log(`api is running on ${PORT}`)
})