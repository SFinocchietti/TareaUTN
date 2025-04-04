import './App.css';
import Producto from './assets/productos';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Detalle de productos</h1>
      
      <Producto
        nombre="Nike Air Max Pulse"
        imagen="https://nikearprod.vtexassets.com/arquivos/ids/745135-800-800?v=638445114302330000&width=800&height=800&aspect=true"
        precioReal={20000}
        precioFinal={16000}
        porcentajeOferta={20}
        stock={10}
      />

      <Producto
        nombre="Nike Air Force 1"
        imagen="https://nikearprod.vtexassets.com/arquivos/ids/722844-800-800?v=638413552667000000&width=800&height=800&aspect=true"
        precioReal={25000}
        precioFinal={20000}
        porcentajeOferta={20}
        stock={8}
      />

      <Producto
        nombre="Nike Dunk Low Retro"
        imagen="https://nikearprod.vtexassets.com/arquivos/ids/720117-800-800?v=638409997291170000&width=800&height=800&aspect=true"
        precioReal={22000}
        precioFinal={18000}
        porcentajeOferta={18}
        stock={12}
      />
    </div>
  );
}

export default App;