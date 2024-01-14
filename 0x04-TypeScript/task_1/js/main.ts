interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    printTeacher(firstName: any, lastName: any): string;
}

const myFunction: printTeacherFunction = {
    printTeacher: function(firstName, lastName) {
    return `${firstName}`.charAt(0) + `. ` + `${lastName}`;
    }
}
console.log(myFunction.printTeacher("John", "Doe"));

interface ConstractorStudent {
    firstName: string;
    lastName: string;
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("Laila", "Hazmir");
console.log(student.displayName());
console.log(student.workOnHomework());
