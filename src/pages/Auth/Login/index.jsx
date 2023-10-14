import  {store}  from "../../../redux/store";
import {userSetDetails} from "../../../redux/user/user.action"
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login handled');
        console.log('State 1 ',store.getState());
        store.dispatch(userSetDetails({ 
            return:{
                userName: 'userName',
                token: 'token23'
            }
         }));
         console.log('State 2 ',store.getState());
      };

    return (
        <div className="container flex flex-row min-h-screen justify-center items-center bg-cyan-50">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="block text-blue-700 text-dm font-bold mb-2">
                        Iniciar Sesion
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
                            Iniciar Sesion
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/Singin">
                            Crear Cuenta
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;