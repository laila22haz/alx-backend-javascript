export default function getListStudentIds(array) {
    if (Array.isArray(array)) {
        let res = array.map(s=>s.id);
        return res;
    } else {
        return [];
    }
}