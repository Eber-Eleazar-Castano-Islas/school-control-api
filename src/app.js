import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import studentsRouter from "./routes/students.routes.js";

const app = express();

//settings
app.set("port", process.env.PORT||3000);
app.set("view engine", "ejs");
app.set("views","./src/views")

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/students",studentsRouter);

export default app;
