export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const res = array.map((s) => s.id);
    return res;
  }
  return [];
}
