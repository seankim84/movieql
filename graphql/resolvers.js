//데이터의 형식 정의하여 함수형식으로 내보내준다.
import { getMovies, getById, addMovie, deleteMovie } from './db';    

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),    
    deleteMovie: (_, {id}) => deleteMovie(id)
  }
};

export default resolvers;