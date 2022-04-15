import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITES} from '../actions';

const initialStateMovies = {
    list:[],
    favourites:[],
    showFavourites :false
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
        case REMOVE_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result:{}
}
export function search(state = initialSearchState,action){
    return state;
}

const initialRootState = {
    movies:initialStateMovies ,
    search:initialSearchState
}
export function rootReducer(state=initialRootState,action){
    return{
        movies:movies(state,action),
        search:search(state,action)
    }
}