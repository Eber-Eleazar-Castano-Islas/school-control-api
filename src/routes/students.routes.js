import { Router } from "express";
import studentControllers from "../controllers/students.controllers.js";
const router = Router();

router.get("/getAll",studentControllers.getAll);
router.get("/getOne/:student_id",studentControllers.getOne);
router.post("/insertOne",studentControllers.insertOne);
router.post("/updateOne/:student_id",studentControllers.updateOne);
router.get("/deleteOne/:student_id",studentControllers.deleteOne);

export default router;