// PizzaDetail.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PizzaDetail = () => {
  const { pizzaName } = useParams();
  const navigate = useNavigate(); 

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
    { 
      name: 'Pizza Margarita', 
      price: 80, 
      rating: 3.4, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMvYVp5Re0_jNQgK81fqH1eCq-JLUwekHEg&s',
      description: 'La auténtica pizza Margarita es un homenaje a los sabores simples y frescos de la cocina italiana. Con su base de salsa de tomate, mozzarella fresca y albahaca, cada bocado es una celebración de ingredientes de alta calidad. Perfecta para los puristas que aprecian el buen comer.'
    },
    { 
      name: 'Pizza Cuatro Quesos', 
      price: 45, 
      rating: 4.7, 
      imageUrl: 'https://www.record.com.pe/wp-content/uploads/2021/09/pizza-4-quesos-g-1.png',
      description: 'Para los amantes del queso, esta pizza es un sueño hecho realidad. Combinando cuatro tipos de quesos diferentes, como mozzarella, cheddar, gorgonzola y parmesano, cada porción está llena de sabor y cremosidad. Ideal para disfrutar con una copa de vino.'
    },
    { 
      name: 'Pizza BBQ Pollo', 
      price: 55, 
      rating: 4.5, 
      imageUrl: 'https://www.hola.com/horizon/landscape/aa7d374ef914-pizza-pollo-adobe-t.jpg',
      description: 'Esta pizza presenta un delicioso pollo a la barbacoa, cebolla morada y un toque de cilantro. La salsa BBQ le da un sabor ahumado que complementa perfectamente el pollo, creando una experiencia culinaria única que se vuelve adictiva.'
    },
    { 
      name: 'Pizza Hawaiana', 
      price: 50, 
      rating: 4.2, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtP-2LGl3lObIN04XA1oEoNn26v7ykCOOcMQ&s',
      description: 'Combinando lo dulce y lo salado, la pizza hawaiana incluye jamón y trozos de piña jugosa, creando un equilibrio perfecto de sabores. Esta pizza es ideal para quienes disfrutan de una fusión única de ingredientes en cada bocado.'
    },
    { 
      name: 'Pizza de Salchicha', 
      price: 60, 
      rating: 4.8, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuULAaqbNLRSU9RUmCUifvI7T8hawh-YQnWQ&s',
      description: 'Con una generosa cantidad de salchicha italiana, esta pizza es una opción robusta para los amantes de la carne. La mezcla de especias de la salchicha combina perfectamente con la salsa de tomate y el queso derretido.'
    },
    { 
      name: 'Pizza de Mariscos', 
      price: 70, 
      rating: 4.3, 
      imageUrl: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/c768b918caebefd4f01147f69a70c31e.jpg?itok=BHmrxmn6',
      description: 'Esta pizza es un festín del mar, repleta de camarones, calamares y mejillones, todos ellos sobre una base de salsa de tomate. Es ideal para quienes buscan un sabor refrescante y ligero.'
    },
    { 
      name: 'Pizza Mediterránea', 
      price: 65, 
      rating: 4.6, 
      imageUrl: 'https://osterstatic.reciperm.com/webp/10400.webp',
      description: 'Una pizza inspirada en los sabores del Mediterráneo, con aceitunas, alcachofas, pimientos asados y queso feta, todo sobre una base de salsa de tomate. Perfecta para los amantes de los sabores frescos y vibrantes.'
    },
    { 
      name: 'Pizza de Champiñones', 
      price: 52, 
      rating: 4.5, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5A3t_IvnTMBtJWDTNRKqv1ObUWdR5Ucsgig&s',
      description: 'Hecha con champiñones frescos y queso mozzarella derretido, esta pizza es un clásico que nunca pasa de moda. Perfecta para una cena tranquila o una reunión con amigos.'
    },
    { 
      name: 'Pizza Mexicana', 
      price: 58, 
      rating: 4.4, 
      imageUrl: 'https://mandolina.co/wp-content/uploads/2023/07/pizza-mexciana-1200x900.png',
      description: 'Una deliciosa mezcla de sabores picantes, con jalapeños, carne molida, frijoles y mucho queso. Esta pizza es ideal para quienes buscan un toque de emoción en su comida.'
    },
  ];    

  const pizza = pizzas.find((p) => p.name === pizzaName);

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['S', 'M', 'L'];

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  const handleBuyClick = () => {
    const total = pizza.price; 
    navigate('/payment', { state: { pizza, total } });
  };

  return (
    <div className="flex items-center justify-center h-screen"> 
      <div className="bg-gray-300 rounded-lg shadow-lg p-6 max-w-sm">
        <img
          src={pizza.imageUrl}
          alt={pizza.name}
          className="w-full h-48 object-cover mb-4 rounded" 
        />
        <h1 className="text-xl font-bold text-center mb-2">{pizza.name}</h1> 
        <p className="text-center mb-2">Precio: ${pizza.price}</p>
        <p className="text-center mb-2">Calificación: {pizza.rating}</p>
        <p className="text-lg mb-4">{pizza.description}</p>
        
        <div className="mb-4">
          <p className="text-center font-semibold">Tamaño:</p>
          <div className="flex justify-center space-x-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`w-16 h-10 border-2 rounded-md transition duration-200 ${
                  selectedSize === size
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'border-gray-400 text-gray-900 hover:bg-orange-500 hover:text-white'
                }`}
                onClick={() => setSelectedSize(size)} 
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleBuyClick} className="w-full mt-2 bg-orange-500 text-white p-2 rounded">Comprar</button>
      </div>
    </div>
  );
};

export default PizzaDetail;