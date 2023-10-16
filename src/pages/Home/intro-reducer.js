const initialState = [{
    id: 1,
    todo: 'Recolectar lapiedra del Alma',
    done: false,
}];

const TodoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }
    return state;
}

let todos = TodoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}
const addTodoAction = {
    type: '[TODO] add todo',
    payload : newTodo,
}

todos = TodoReducer(todos, addTodoAction);