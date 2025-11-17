import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import path from "path";
import studentsRouter from "./routes/students.routes.js";
import studentControllers from "./controllers/students.controllers.js";

const app = express();

//settings
app.set("port", process.env.PORT||3000);
//app.set("view engine", "ejs");
//app.set("views","./src/views")

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(path.resolve(), 'src/views')); 
app.set('view engine', 'ejs');
app.get('/', studentControllers.getAll);


app.use((req, res, next) => {
    res.status(404).render('404'); // Si tienes la vista 404.ejs
    // O res.status(404).json({ message: "Ruta no encontrada" });
});

//routes
app.use("/api/students",studentsRouter);

export default app;
