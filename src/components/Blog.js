import React from 'react';

const pizzas = [
  { 
    name: 'Pizza Vegetariana', 
    price: 40, 
    rating: 4.2, 
    imageUrl: 'https://cdn.shopify.com/s/files/1/0191/9978/files/Pizza-Veggie-Supreme-blog.jpg?v=1652775259',
    description: 'Deliciosa pizza cargada de una variedad de vegetales frescos como pimientos, cebollas, champiñones y espinacas, todo ello combinado con un suave queso mozzarella y una salsa de tomate casera. Ideal para quienes buscan una opción saludable sin sacrificar el sabor.'
  },
  { 
    name: 'Pizza con Pepperoni', 
    price: 50, 
    rating: 5.0, 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArskfOI51OA-xtLn1xIq3NC6e5uDQ0fI1xA&s',
    description: 'La clásica pizza de pepperoni es un favorito entre los amantes de la carne. Con su base de salsa de tomate, abundante queso mozzarella y rodajas de pepperoni crujientes, esta pizza es perfecta para cualquier ocasión, ya sea una cena en familia o una reunión con amigos.'
  },
  { 
    name: 'Pizza Suprema', 
    price: 50, 
    rating: 4.0, 
    imageUrl: 'https://www.pizzahut.com.sv/static/media/images/images/jpg/4556_1_08-11-2023-10-57.jpg',
    description: 'Una explosión de sabores en cada bocado, la pizza suprema está repleta de diferentes tipos de carne, incluyendo pepperoni, jamón y salchicha, además de cebolla, pimientos y aceitunas. Esta pizza es ideal para quienes no pueden decidirse por un solo sabor y quieren disfrutar de lo mejor de todos.'
  },
];

const Blog = () => {
  const recommendedPizzas = pizzas.slice(0, 3);

  return (
    <div className="p-8 bg-gray-800">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-white">Nuestras pizzas recomendadas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommendedPizzas.map((pizza, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={pizza.imageUrl} alt={pizza.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{pizza.name}</h2>
              <p className="text-gray-600 mb-4">{pizza.description}</p>
              <p className="text-lg font-semibold text-gray-800 mb-4">Price: <span className="text-green-500">${pizza.price}</span></p>
              <button className="bg-purple-500 text-white p-2 rounded-md w-full font-semibold hover:bg-purple-600 hover:shadow-lg transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;