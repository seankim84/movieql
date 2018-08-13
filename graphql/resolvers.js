//데이터의 형식 정의하여 함수형식으로 내보내준다.
import { people, getById } from './db';    

const resolvers = {
    Query: {
        people: () => people,
        person: () => getById
    }
};

export default resolvers;