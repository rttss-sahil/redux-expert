import actionTypes from './actionTypes';

const actions = {
    addMovies: (items) => ({
        type: actionTypes.ADD_MOVIES,
        items
    }),
    addFavorites: (item) => ({
        type: actionTypes.ADD_FAVORITE,
        item
    }),
    removeFavorites: (item) => ({
        type: actionTypes.REMOVE_FAVORITE,
        item
    })
}


export default actions;