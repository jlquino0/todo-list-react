const ListItem = ({ todo }) => {
    return (
        <div>
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {todo.description}
                            </p>
                        </div>
                </div>
            </li>
        </div>
    )
}

export default ListItem;