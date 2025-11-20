/*
import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import path from "path";
import studentsRouter from "./routes/students.routes.js";
import studentControllers from "./controllers/students.controllers.js";
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// CONFIGURACIÓN DE VISTAS CORREGIDA
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

//routes
app.get('/', studentControllers.getAll);
app.use("/api/students",studentsRouter);

export default app;
*/
import express from "express";
import morgan from "morgan";
import path from "path";
import studentsRouter from "./routes/students.routes.js";
import studentControllers from "./controllers/students.controllers.js";
import { fileURLToPath } from 'url';
import teacherControllers from "./controllers/teachers.controllers.js";
import teacherRouter from "./routes/teachers.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//settings
app.set("port", process.env.PORT||3000);

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

// conf view 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', studentControllers.getAll);
app.use("/api/students", studentsRouter);
// Mount the teachers router under /api/teachers
//app.get('/',teacherControllers.getAll);
app.use("/api/teachers", teacherRouter);


app.use((req, res, next) => {
    res.status(404).render('404');
});

export default app;