import {ADD_MOVIES,ADD_FAVOURITE} from '../actions';

const initialStateMovies = {
    list:[],
    favourites:[]
}
export function movies (state = initialStateMovies,action) {
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        default:
            return state;
    }
}