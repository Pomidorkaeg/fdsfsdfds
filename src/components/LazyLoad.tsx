import React, { Suspense } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
}

// Компонент для отображения во время загрузки
const Fallback = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-t-fc-green rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Загрузка...</p>
    </div>
  </div>
);

// Компонент ленивой загрузки с перехватом ошибок
export const LazyLoad: React.FC<LazyLoadProps> = ({ children }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};

// Компонент для перехвата ошибок
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <h2 className="text-2xl font-bold text-red-600">Что-то пошло не так</h2>
          <p className="mt-2 text-gray-600">
            Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте обновить страницу.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-fc-green text-white rounded-md hover:bg-fc-darkGreen"
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LazyLoad; 