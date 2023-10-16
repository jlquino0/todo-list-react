import { useForm } from "../hooks/UseForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',

    });
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;


        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={onFormSubmit}>
                <div className="flex items-center border-b-2 border-teal-500 py-2">

                    <input type="text" placeholder='¿Qué hay que hacer?' className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        name="description"
                        value={description}
                        onChange={onInputChange}
                    />
                    <button type='submit' className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Agregar</button>
                </div>
            </form>
        </>
    )
}

export default TodoAdd
