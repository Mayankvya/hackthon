import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

mongoose.set("strictQuery", false)

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


mongoose.connect("mongodb+srv://admin:PloHo5cQdGoU6duC@cluster0.wcvwzc4.mongodb.net/Blog?retryWrites=true&w=majority")
.then(() => app.listen(0.0.0.0:$PORT))
.then(() =>
    console.log("Conneted to Database and Listening To Localhost 5000"))
  
  .catch((err) => console.log(err));
