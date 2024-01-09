export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const objGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: objGrade ? objGrade.grade : 'N/A',
    };
  });
}
