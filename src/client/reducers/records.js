const records = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECORD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default records