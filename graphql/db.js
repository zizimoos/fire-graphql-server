export const people = [
  {
    id: "1",
    name: "zizimoos",
    age: 30,
    genner: "male",
  },
  {
    id: "2",
    name: "tomson",
    age: 27,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
