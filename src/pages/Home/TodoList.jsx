import TodoItem from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo, onClickTodo }) => {
  return (
    <>
      <ul role="list" className='divide-y divide-gray-200 px-4'>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo} onClickTodo={onClickTodo}
            />
          ))
        }

      </ul>
    </>
  )
}

export default TodoList
