import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.svg" alt="Спортивный портал" className="h-10" />
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/news" className="nav-link">Новости</Link>
            <Link to="/events" className="nav-link">Турниры</Link>
            <Link to="/teams" className="nav-link">Команды</Link>
            <Link to="/about" className="nav-link">О нас</Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              className="p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Главная</Link>
              <Link to="/news" className="nav-link" onClick={() => setIsMenuOpen(false)}>Новости</Link>
              <Link to="/events" className="nav-link" onClick={() => setIsMenuOpen(false)}>Турниры</Link>
              <Link to="/teams" className="nav-link" onClick={() => setIsMenuOpen(false)}>Команды</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>О нас</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 