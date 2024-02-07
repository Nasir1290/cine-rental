
const movieReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            return [...state,action.payload];
        }
        case "REMOVE_FROM_CART": {
            return [...state,state.filter((item) => item.id !== action.payload.id)];
        }
    }
}

export {movieReducer}