class UniversityMember {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = 24;
  }
  info() {
    let infoArr = [];
    for (let key in this) {
      infoArr.push(`${key} : ${this[key]}`);
    }
    return infoArr.join("\n");
  }
}

class Teacher extends UniversityMember {
  constructor(name, age) {
    super(name, age);
    this.role = "teacher";
  }
}

class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age);
    this.role = "student";
  }
}

class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }
  addMember(member) {
    if (member.role === "teacher") this.teachers.push(member);
    if (member.role === "student") this.students.push(member);
  }
  removeMember(member) {
    if (member.role === "teacher") {
      this.teachers.splice(this.teachers.indexOf(member), 1);
    }
    if (member.role === "student") {
      this.students.splice(this.students.indexOf(member), 1);
    }
  }
  startLesson() {
    this.students.forEach((item) => (item.energy -= 2));
    this.teachers.forEach((item) => (item.energy -= 5));
  }
}

let tech1 = new Teacher("John", 40),
  tech2 = new Teacher("Hayk", 36),
  tech3 = new Teacher("Armen", 45),
  tech4 = new Teacher("Alex", 67);

let stud1 = new Student("Ani", 18),
  stud2 = new Student("Aram", 20),
  stud3 = new Student("Tatev", 23),
  stud4 = new Student("Samoel", 19);

const cambridge = new University();
cambridge.addMember(tech1);
cambridge.addMember(tech2);
cambridge.addMember(tech3);
cambridge.addMember(tech4);
cambridge.addMember(stud1);
cambridge.addMember(stud2);
cambridge.addMember(stud3);
cambridge.addMember(stud4);
cambridge.removeMember(stud4);
cambridge.startLesson();
console.log(cambridge);
