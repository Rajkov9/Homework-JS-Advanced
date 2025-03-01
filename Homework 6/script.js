class Person{
    constructor(firstName, lastName, age, address){
        this.firstName = !firstName ? "Unnamed" : firstName;
        this.lasttName = !lastName ? "Unnamed" : lastName;
        this.age = age;
        this.address = address;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, address, academy, subjects){
        super(firstName, lastName, age, address);
        this.academy = academy;
        this.subjects = subjects;
    }
    static studentAndSubject(student, subject){
       return student.subjects.filter(s => s === subject).length > 0;
    }
}

let student = new Student("Jack", "West", 23, "Kahala Avenue - Hawaii", "Qinshift Academy", ["C#", "Java Script"]);
let student2 = new Student("Eva", "Sanchez", 28, "Beyer Rd - Texas", "Qinshift Academy", ["C#", "Python"]);

console.log(student);
console.log(student2);
let studySubject = Student.studentAndSubject(student, "C#");
console.log(studySubject);
let doesStudySubject = Student.studentAndSubject(student2, "Java Script");
console.log(doesStudySubject);