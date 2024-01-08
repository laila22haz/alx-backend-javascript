export default function getStudentIdsSum(array) {
  return array.reduce((sum, students) => sum + students.id, 0);
}
