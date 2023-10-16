import TodoItem from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul role="list" className='divide-y divide-gray-200 px-4'>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))
        }

      </ul>
    </>
  )
}

export default TodoList
