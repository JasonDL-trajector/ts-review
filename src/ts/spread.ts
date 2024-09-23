type Student = {
  name: string;
  grade: number;
};

type Student2 = Student & {
  gender: string;
};

// merges the two objects togethes. updates the default object to a new object
const mergeStudent = (
  defaultStudent: Student,
  newStudent: Student2
): Student & Student2 => {
  return { ...defaultStudent, ...newStudent };
};

//  default object
const student1: Student = {
  name: 'John',
  grade: 10,
};

// updated object
const student2: Student2 = {
  name: 'Jane',
  grade: 12,
  gender: 'female',
};

export const printStudent = (
  student: Student = student1,
  newStudent: Student2 = student2
) => {
  const studentData = mergeStudent(student, newStudent);
  return `${studentData.name} is ${studentData.grade} years old, and is ${studentData.gender}`;
};
