export default function getStudentsByLocation(array, city) {
  const arr = array.filter((Students) => Students.location === city);
  return arr;
}
