//  multiples each iteration of numbers by 2
const numbers: number[] = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Doubled Numbers:', doubledNumbers);

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];

//  filters out people who are older than 18
const adults = people.filter((person) => person.age > 18);
console.log('Adults:', adults);
