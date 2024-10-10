import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDb from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

// app congig

const app = express();
const port = process.env.PORT || 3000
connectDb()
connectCloudinary()

// middlewares

app.use(express.json())
app.use(cors())

// api endpoints

app.use("/api/user",userRouter)
app.use("/api/product", productRouter)

app.get("/", (req,res) => {
    res.send("Api Working")
})

app.listen(port, ()=> {
    console.log("Server is running on port 3000");
    
})



