let initialState = {
    count: 0
}

const counterReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                count: state.count + 1
                // action.value
            }
        case 'DEC':
            return {
                count: state.count - 1
                // action.value
            }
        default:
            return state
    }
}

export default counterReducers