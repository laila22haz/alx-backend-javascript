interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Anas",
    lastName: "Henani",
    age: 20,
    location: "Morocco"
};

let student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(function(student) {
    const row = table.insertRow();
    const cell_one = row.insertCell(0);
    const cell_two = row.insertCell(1);
    
    cell_one.textContent = student.firstName;
    cell_two.textContent = student.location;
});
document.body.appendChild(table);
