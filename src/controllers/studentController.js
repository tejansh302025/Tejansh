import Student from "../models/Student.js";

const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: student
    })
  } catch (error) {
    res.status(400).json({
      message: false,
      message: "Student added failed",
    })
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      total: students.length,
      data: students
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
export default { addStudent, getAllStudents };