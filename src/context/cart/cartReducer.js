const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        case 'REMOVE':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id!== action.payload)
            }

        case 'EMPTY':   
            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}
export default cartReducer