export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(x) {
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(x) {
    this._length = x;
  }

  get students() {
    return this._students;
  }

  set students(x) {
    this._students = x;
  }
}
