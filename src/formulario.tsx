const RegistroFormulario = () => {
    return (
        <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', width: '55%', margin: 'auto' }}>
            <h1>Formulario básico  UTN</h1>
            <form>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="nombre" style={{ textAlign: 'left' }}>Nombre</label>
                        <input type="text" id="nombre" style={{ width: '85%' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="apellido" style={{ textAlign: 'left' }}>Apellido</label>
                        <input type="text" id="apellido" style={{ width: '85%' }} />
                    </div>
                </div>
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="email" style={{ textAlign: 'left' }}>Email</label>
                    <input type="text" id="email" style={{ width: '93%' }} />
                </div>
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="telefono" style={{ textAlign: 'left' }}>Teléfono</label>
                    <input type="text" id="telefono" style={{ width: '93%' }} />
                </div>
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="contraseña" style={{ textAlign: 'left' }}>Contraseña</label>
                    <input type="password" id="contraseña" style={{ width: '93%' }} />
                </div>
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="confirmar" style={{ textAlign: 'left' }}>Confirmar Contraseña</label>
                    <input type="password" id="confirmar" style={{ width: '93%' }} />
                </div>
                <button type="submit" style={{ marginTop: '10px', width: '98%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default RegistroFormulario;