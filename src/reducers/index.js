import {ADD_MOVIES} from '../actions';

const initialStateMovies = {
    list:[],
    favourites:[]
}
export function movies (state = initialStateMovies,action) {
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}