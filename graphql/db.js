export const people = [{
        id: "0",
        name: "Sean",
        age: 28,
        gender: "Male"
    },
    {
        id: "1",
        name: "Rebekah",
        age: 28,
        gender: "Female"
    },
    {
        id: "2",
        name: "Jack",
        age: 31,
        gender: "Male"
    },
    {
        id: "3",
        name: "Sweet",
        age: 25,
        gender: "Female"
    },
    {
        id: "4",
        name: "JapanGuy",
        age: 39,
        gender: "Male"
    },
    {
        id: "5",
        name: "Roboto",
        age: 60,
        gender: "Male"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(peson => people.id === id); // 해당 id와 맞는 대상을 return
    return  filteredPeople[0];
}