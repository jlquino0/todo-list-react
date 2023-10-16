import Navbar from "./Navbar/navbar"
import { TodoList } from './TodoList';
import TodoAdd from './TodoAdd';
import useTodos from '../hooks/useTodos';

export const Home = () => {

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
