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


// 🟢 AQUÍ VA app.get('/') PARA CORREGIR EL 404
app.get('/', (req, res) => {
    // Debes pasar la lista de estudiantes para que index.ejs funcione
    const students = []; // Reemplaza esto con la consulta real a la BD
    res.status(200).render('index', { 
        students: students, 
        title: 'School Control'
    });
});

//routes
app.use("/api/students",studentsRouter);

export default app;
