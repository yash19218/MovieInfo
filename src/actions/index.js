// {
//     type:"ADD_MOVIES"
// }

export const ADD_MOVIES = "ADD_MOVIES";

//actions creater!
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}