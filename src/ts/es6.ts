type Person = {
  name: string;
  age: number;
  gender: string;
};

const location = ['Makati', 'Manila', 'Cebu'];
const location2 = ['Pasay', 'Quezon City', 'Caloocan'];

// Merge the arrays together
const mergeLocation = (location1: string[], location2: string[]) => {
  return [...location1, ...location2];
};

const arrayOfAge = [13, 18, 25];

//  Filters the array and map the array, then processes it
const rightAge = (arrayOfAge: number[]) => {
  return arrayOfAge
    .filter((arrayOfAge) => arrayOfAge > 20)
    .map((arrayOfAge) => arrayOfAge - 2);
};

const person = (
  // adds default values
  PersonData: Person = { name: 'John', age: 26, gender: 'male' }
) => {
  // copies the object
  const newPersonData: Person = {
    ...PersonData,
  };

  return `My name is ${newPersonData.name} and I am ${rightAge(
    arrayOfAge
  )} years old. I am ${newPersonData.gender} and I live in ${mergeLocation(
    location,
    location2
  )}`;
};

export { person };
