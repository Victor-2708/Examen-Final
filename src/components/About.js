import React from 'react';

const About = () => {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Pizzeria_in_Venice.jpg/800px-Pizzeria_in_Venice.jpg';
 
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Acerca de Nosotros</h2>
            <p className="mb-4 text-lg leading-relaxed text-center">
                <span className="font-semibold">¡Bienvenidos!</span> Somos una pizzería apasionada por ofrecer las mejores pizzas de la ciudad. Utilizamos ingredientes frescos y de alta calidad para crear combinaciones deliciosas que satisfacen todos los gustos.
            </p>
            
            <h3 className="text-2xl font-semibold mt-4 text-red-500">Síguenos en nuestras redes sociales:</h3>
            <ul className="mb-6 space-y-2 text-center">
                <li>
                <a 
                    href="https://www.youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:underline"
                >
                    YouTube
                </a>
                </li>
                <li>
                <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:underline"
                >
                    Nuestra Ubicación en Google Maps
                </a>
                </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-green-500">Nuestra Misión:</h3>
            <p className="mb-4 text-lg leading-relaxed text-center">
                Proporcionar una experiencia gastronómica excepcional y un servicio al cliente inigualable.
            </p>
            
            <h3 className="text-2xl font-semibold text-blue-500">Nuestra Visión:</h3>
            <p className="text-lg leading-relaxed text-center">
                Ser la pizzería favorita de la comunidad, conocida por nuestra dedicación a la calidad y la innovación en cada pizza que servimos.
            </p>
            
            <div className="flex justify-center mt-8">
                <img 
                src={imageUrl} 
                alt="Nuestra Pizzería" 
                className="w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg border-4 border-yellow-400" 
                />
            </div>
            
            <div className="mt-10 text-center">
                <h3 className="text-2xl font-bold text-orange-500">¡Te esperamos con los brazos abiertos!</h3>
                <p className="text-lg mt-2">Disfruta de nuestras deliciosas pizzas en un ambiente acogedor.</p>
            </div>
        </div>
    );
};

export default About;