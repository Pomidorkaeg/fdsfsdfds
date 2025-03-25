import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-6 text-gray-800">Страница не найдена</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-fc-green text-white px-6 py-3 rounded-md font-medium hover:bg-fc-darkGreen transition duration-300"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
