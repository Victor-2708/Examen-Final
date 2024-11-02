import React, { useEffect, useState } from 'react';
import PizzaCard from './PizzaCard';
import pizzasData from './pizzas.json'; 

const PizzaList = ({ filter, sortOrder }) => { 
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzasData);
  }, []);

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedPizzas = filteredPizzas.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price; 
    } else {
      return b.price - a.price; 
    }
  });

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {sortedPizzas.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;