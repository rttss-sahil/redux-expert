import actionTypes from "../actions/actionTypes";



const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE:
            return findById(state, action.item) ? state : [
                ...state,
                action.item
            ]

        case actionTypes.REMOVE_FAVORITE:
            return state.filter(item => item.id !== action.item.id)

        default:
            return state;
    }
}

const findById = (state, item) => state.find(movie => movie.id === item.id);


export default favoriteReducer;