const RegistroFormulario = () => {
    return (
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-4">Formulario básico tarea de UTN</h1>
            <form className="flex flex-col items-center">
                <div className="mb-4 w-full flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div className="mb-4 w-full flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Apellido</label>
                    <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div className="mb-4 w-full flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div className="mb-4 w-full flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Teléfono</label>
                    <input type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div className="mb-4 w-full flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Contraseña</label>
                    <input type="password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <div className="mb-6 w-full flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                    <input type="password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    Registrarse
                </button>
            </form>
        </div>

    );
};

export default RegistroFormulario;
