import actionTypes from "../actions/actionTypes";

const movieReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_MOVIES:
            return [
                ...action.items
            ]

        default:
            return state;
    }
}


export default movieReducer;

