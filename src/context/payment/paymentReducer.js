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

            case 'SET CURRENCY':
                return{
                    ...state,
                    totalvalue: action.payload
                }
                case 'SET ORDER':
                    return{
                        ...state,
                        order: action.payload
                    }
    }
}