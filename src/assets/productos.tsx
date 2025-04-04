import { useState } from 'react';

const Producto = ({
    nombre,
    imagen,
    precioReal,
    precioFinal,
    porcentajeOferta,
    stock,
  }: {
    nombre: any;
    imagen: any;
    precioReal: any;
    precioFinal: any;
    porcentajeOferta: any;
    stock: any;
  }) => {
  const [comprado, setComprado] = useState(false);

  const handleCompra = () => {
    setComprado(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 20, maxWidth: 400, margin: '2rem auto' }}>
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} style={{ width: '100%', marginBottom: 10 }} />
      <p><strong>Precio real:</strong> ${precioReal}</p>
      <p><strong>Precio Promoción:</strong> ${precioFinal}</p>
      <p><strong>Descuento:</strong> {porcentajeOferta}%</p>
      <p><strong>Stock disponible:</strong> {stock} unidades</p>
      <button onClick={handleCompra}>Comprar</button>
      {comprado && <p style={{ color: 'green', marginTop: 10 }}>Gracias por su compra</p>}
    </div>
  );
};

export default Producto;
