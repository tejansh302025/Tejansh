import express, { Router } from 'express';
import { addStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';
const router = express.Router();

router.post('/', addStudent);
router.get('/', getAllStudents);
router.get('/:id', getSingleStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;