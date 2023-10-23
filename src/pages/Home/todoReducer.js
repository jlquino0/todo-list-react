export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload];
        case 'Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'Edit Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo
            });
        case 'Modify Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description,
                    }
                }

                return todo
            });
        default:
            return initialState;
    }
}