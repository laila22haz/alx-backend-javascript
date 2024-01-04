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

  get length() {
    return this._length;
  }
  set name(x) {
    if (typeof x !== 'string') {
        throw new TypeError('name must be a string');
    } else {
        this._name = x;
    }
  }

  get students() {
    return this._students;
  }

  set length(x) {
    if (typeof x !== 'number') {
        throw new TypeError('length must be a number');
    } else {
        this._length = x;
    }
  }


  set students(x) {
    if (!Array.isArray(x)) {
        throw new TypeError('students must be an array');
    } else {
        this._students = x;
    }
  }
}
