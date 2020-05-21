import * as actionTypes from './actions'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        beef: 0
    },
    totalPrice: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients, // Creating deep clone of the state as we don't want to mutate the state
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // Gets the number of ingredients, adds one, and assigns this to the ingredient total 
                }
            }
        case actionTypes.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
        default:
            return state
    }
}

export default reducer