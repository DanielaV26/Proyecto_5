export const paymentReducer = (state, action) => {
    switch (action.type) {

        case 'ADD PERSONAL DATA':
            return {
                ...state,
                personalData: action.payload
            }

        case 'CHANGE DELIVERY':
            return {
                ...state,
                delivery: action.payload
            }

        case 'CHANGE STEP':
            return {
                ...state,
                step: action.payload
            }
    }
}