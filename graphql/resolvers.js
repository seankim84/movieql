const Sean = {
    name : "Sean",
    age : 28,
    gender : "male"
};

const resolvers = {
    Query: {
        person : () => Sean
    }
};

export default resolvers;