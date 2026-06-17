import express, { Router } from "express";
import studentController from "../controllers/studentController.js";

const router = express.Router();

router.post("/", studentController.addStudent);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getSingleStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

export default router;
