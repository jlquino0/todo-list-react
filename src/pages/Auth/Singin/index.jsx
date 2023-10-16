import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Singin = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            data:{
                username:e.target.username.value,
                password:e.target.password.value
            },
            withCredentials: true,
            url: "http://localhost:3001/register"
        }).then((res)=>{
            console.log(res)
            if(res.statusText = 'OK')
            {
                navigate('/');
            }
        }).catch((err)=> console.log(err));
    };

    return (
        <div className="container flex flex-row min-h-screen justify-center items-center bg-cyan-50">
            <div className="w-full max-w-xs">

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="block text-blue-700 text-dm font-bold mb-2">
                        Registrarse
                    </label>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" name="username">
                            Usuario
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" name="password">
                            Contraseña
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="summit">
                            Crear Cuenta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Singin;