interface User {
  id: number;
  name: string;
  age: number;
}

export const usersArray: User[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Thanos', age: 32 },
];

//  filters out users who are older than 30
export const filterOlderUsers = (users: User[] = usersArray) => {
  return `${users.filter((user) => user.age >= 30)}`;
};

//  maps each user to their name
export const getUserNames = (users: User[] = usersArray) => {
  return `${users.map((user) => user.name)}`;
};

// provides the total number of users and the average age
export const getSummary = (users: User[] = usersArray) => {
  const totalUsers = users.length;
  // the reduce method adds each user's age to the total, with the initial value of 0
  const totalAge = users.reduce((total, user) => total + user.age, 0);

  return {
    totalUsers,
    averageAge: totalUsers > 0 ? totalAge / totalUsers : 0,
  };
};

// finds a specific user by name
export const findUserByName = (users: User[] = usersArray, name: string) => {
  return users.find((user) => user.name === name);
};
