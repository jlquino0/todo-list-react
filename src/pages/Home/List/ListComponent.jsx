import ListItem from "./ListItem";

const ListComponent = ({ todos = [] }) => {
    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
                {
                    todos.map(todo => (
                        <ListItem key={todo.id} todo={todo}
                        />
                    ))
                }
            </ul>
        </div>
    )
};

export default ListComponent;