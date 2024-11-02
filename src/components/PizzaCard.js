import React from 'react';
import { useNavigate } from 'react-router-dom';

const PizzaCard = ({ pizza }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/pizza/${pizza.name}`); 
  };

  if (!pizza) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center border border-gray-600 shadow-lg overflow-hidden w-max">
      <img src={pizza.imageUrl} alt={pizza.name} className="w-48 h-32 object-cover mb-4" />
      <h2 className="text-lg font-bold mt-2">{pizza.name}</h2>
      <p className="text-sm">Precio: S/{pizza.price}</p>
      <p className="text-sm">Rating: {pizza.rating}</p>
      <button className="bg-orange-500 px-4 py-2 mt-4 rounded-md" onClick={handleBuyClick}>Mas información</button>
    </div>
  );
};

export default PizzaCard;