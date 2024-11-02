// src/components/OrderStatus.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OrderStatus = () => {
  const location = useLocation();
  const { pizza, total } = location.state || {};

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getOrderStatusText = () => {
    if (progress < 40) return "Preparando en el establecimiento...";
    if (progress < 80) return "En camino...";
    return "¡Casi entregado!";
  };

  if (!pizza) {
    return <p>No se encontraron detalles del pedido.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h2 className="text-2xl font-bold mb-4">Estado del Pedido</h2>
      
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-sm mb-6">
        <img src={pizza.imageUrl} alt={pizza.name} className="w-32 h-32 object-cover rounded mb-4" />
        <h3 className="text-lg font-semibold">{pizza.name}</h3>
        <p>Total: ${total}</p>
      </div>

      <div className="w-full max-w-sm bg-gray-300 rounded-full h-6 mb-4 overflow-hidden">
        <div
          className="bg-green-500 h-full text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <p className="text-gray-700 mb-6">{getOrderStatusText()}</p>

      <div className="bg-gray-300 w-full max-w-sm h-64 rounded-md overflow-hidden mb-6">
        <iframe
            title="Mapa de entrega"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2021546810297!2d-122.41941568468107!3d37.7749297797581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f35.46890867701989!3m3!1m2!1s0x80858143c75a3df7%3A0x47f511f77ec5e78c!2sSan%20Francisco%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1699162401636!5m2!1ses-419!2sco"
            className="w-full h-full"
            allowFullScreen
        ></iframe>
      </div>

      <p className="mt-4 text-gray-700">Su pedido está en camino</p>
    </div>
  );
};

export default OrderStatus;