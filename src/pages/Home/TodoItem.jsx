export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onClickTodo }) => {
    return (
        <>

            {/* <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                    onClick={() => onToggleTodo(todo.id)}>
                    {todo?.description}
                </span>
            </li> */}

            <li className="py-4">
                <div className="flex items-center justify-between">
                    <input id="todo1" name="todo1" type="checkbox" aria-label="todocheckbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" onClick={() => onToggleTodo(todo.id)} checked={todo.done} />
                    <div className="flex min-w-0 gap-x-4">
                        <div className="ml-3 block text-gray-900">
                            <p className="text-lg font-medium" onClick={() => { const newText = prompt("Modifica tu to-do", todo.description); if (newText) { onClickTodo(todo.id, newText) } }} >{todo?.description}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <button className="bg-blue-500 flex-shrink-0  border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" aria-label="tododeletebutton" onClick={() => onDeleteTodo(todo.id)}> Borrar</button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default TodoItem
