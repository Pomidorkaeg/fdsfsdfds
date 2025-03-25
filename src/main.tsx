import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Предварительная загрузка критических ресурсов
const preloadImages = () => {
  const images = [
    '/assets/logo.svg',
    '/assets/hero-bg.svg',
    '/vite.svg'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Функция для быстрого первоначального рендеринга
const startApp = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
  
  // Предзагрузка после отрисовки основного контента
  setTimeout(preloadImages, 100);
};

// Начинаем рендеринг немедленно
startApp();

// Регистрируем service worker для кэширования ресурсов
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
