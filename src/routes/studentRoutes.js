import express, { Router } from 'express';
import studentController from '../controllers/studentController.js';

const router = express.Router();

router.post('/', studentController.addStudent);
router.get('/', studentController.getAllStudents);
// router.get('/:id', getSingleStudent);
// router.put('/:id', updateStudent);
// router.delete('/:id', deleteStudent);

export default router;