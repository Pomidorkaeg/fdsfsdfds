import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-fc-green py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-bg.svg" 
            alt="" 
            className="w-full h-full object-cover" 
            aria-hidden="true"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Добро пожаловать на Спортивный портал</h1>
            <p className="text-xl mb-8 text-white/90">Следите за последними новостями, результатами матчей и расписанием соревнований</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/news" className="bg-white text-fc-green px-6 py-3 rounded-md shadow-md font-semibold hover:bg-gray-100 transition duration-300">
                Новости
              </Link>
              <Link to="/events" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition duration-300">
                Турниры
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Последние новости */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Последние новости</h2>
            <Link to="/news" className="text-fc-green hover:underline font-medium">Все новости →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Новостные карточки */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-4">
                  <div className="text-gray-500 text-sm mb-2">15 марта 2025</div>
                  <h3 className="text-xl font-semibold mb-2">Заголовок новости {item}</h3>
                  <p className="text-gray-600 mb-4">Краткое описание новости или анонс события, который будет интересен пользователям.</p>
                  <Link to={`/news/${item}`} className="text-fc-green font-medium hover:underline">Читать дальше →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Предстоящие матчи */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Предстоящие матчи</h2>
            <Link to="/events" className="text-fc-green hover:underline font-medium">Все матчи →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Карточки предстоящих матчей */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="text-gray-500 text-sm mb-2">20 марта 2025 • 18:00</div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <span className="font-semibold ml-2">Команда A</span>
                  </div>
                  <span className="text-lg font-bold">VS</span>
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Команда B</span>
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">Стадион "Спартак"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Турнирная таблица */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Турнирная таблица</h2>
            <Link to="/tables" className="text-fc-green hover:underline font-medium">Все таблицы →</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-fc-green text-white">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Команда</th>
                  <th className="px-4 py-3 text-center">И</th>
                  <th className="px-4 py-3 text-center">В</th>
                  <th className="px-4 py-3 text-center">Н</th>
                  <th className="px-4 py-3 text-center">П</th>
                  <th className="px-4 py-3 text-center">О</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((pos) => (
                  <tr key={pos} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">{pos}</td>
                    <td className="px-4 py-3 font-medium">Команда {pos}</td>
                    <td className="px-4 py-3 text-center">15</td>
                    <td className="px-4 py-3 text-center">{10 - pos}</td>
                    <td className="px-4 py-3 text-center">{pos}</td>
                    <td className="px-4 py-3 text-center">{pos - 1}</td>
                    <td className="px-4 py-3 text-center font-bold">{35 - (pos * 3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Подписка на новости */}
      <section className="py-12 bg-fc-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Получайте последние новости, результаты матчей и расписание прямо на вашу электронную почту</p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-white text-fc-green font-semibold rounded-md hover:bg-gray-100 transition duration-300"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 