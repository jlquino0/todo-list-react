import { useEffect, useReducer } from "react";
import { todoReducer } from "../Home/todoReducer";
import axios from 'axios';

const init = () => {
    console.log('localstorage-: ',localStorage.getItem('todos'));
    if (localStorage.getItem('todos') == null) {
        return [];
    }else{
        return JSON.parse(localStorage.getItem('todos') || []);
    }   
}

const initialState = JSON.parse(localStorage.getItem('todos')) || []

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        //save to mongo
        console.log('todos test value ',todos);
        if(todos.length>0)
        {
            console.log('undefined failed')
            axios({
                method: "post",
                data: {
                    todos
                },
                withCredentials: true,
                url: "http://localhost:3001/api/todos"
            }).then((res) => {
                console.log(res)
            }).catch((err) => console.log(err));
        }
        
        //save to mongo
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Edit Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleClickTodo = (id,description) => {
        const action = {
            type: 'Modify Todo',
            payload: {
                id: id,
                description: description
            },
        }
        dispatch(action);
    }

    return {
        handleDeleteTodo,
        todos,
        handleNewTodo,
        handleToggleTodo,
        handleClickTodo
    }

}

export default useTodos
