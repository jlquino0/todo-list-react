import Navbar from "./Navbar/navbar"
import { TodoList } from './TodoList';
import TodoAdd from './TodoAdd';
import useTodos from '../hooks/useTodos';
import { store } from "../../redux/store";
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    let navigate = useNavigate();
    console.log('get state work from home ', store.getState());
    const state = store.getState();
    const details = state.user.details;
    console.log('get state work from home2 ', details);
    if(details === null){
        navigate('/');
    }

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
                <TodoAdd onNewTodo={handleNewTodo} />
                <hr />
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
            </div>
        </>
    )
}

export default Home
