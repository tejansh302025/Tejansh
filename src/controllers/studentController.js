let students = [
  {
    id: 1,
    name: "Sumit",
    age: 25,
    course: "Node.js",
    email: "sumit@gmail.com",
  },
];

export const addStudent = (req, res) => {
  const { name, age, course, email } = req.body;

  if (!name || !age || !course || !email) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    course,
    email,
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student added successfully",
    data: newStudent,
  });
};

export const getAllStudents = (req, res) => {
  res.status(200).json({
    success: true,
    total: students.length,
    data: students,
  });
};

export const getSingleStudent = (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  res.status(200).json({
    success: true,
    data: student,
  });
};

export const updateStudent = (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  const { name, age, course, email } = req.body;

  student.name = name || student.name;
  student.age = age || student.age;
  student.course = course || student.course;
  student.email = email || student.email;

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: student,
  });
};

export const deleteStudent = (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  students = students.filter((item) => item.id !== id);

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
  });
};