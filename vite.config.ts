import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    // Генерируем ресурсы с постоянными именами (без хешей) для простоты ссылок
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Улучшаем производительность с помощью разделения кода
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-tooltip', 'lucide-react'],
          'query': ['@tanstack/react-query'],
        }
      }
    },
    // Оптимизируем сборку для быстрой загрузки
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    cssMinify: true,
    target: 'es2015',  // Целевые современные браузеры для уменьшения размера бандла
    // Разделяем код на чанки для оптимизации загрузки
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    // Добавляем предварительную загрузку критических ресурсов
    assetsInlineLimit: 4096,
    // Включаем сжатие Brotli
    brotliSize: true
  },
  plugins: [
    react({
      // Оптимизация React
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['@babel/plugin-transform-runtime'],
          ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Для корректной работы при открытии файла напрямую
  base: './',
  // Добавляем оптимизации для более быстрой разработки
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'es2020',
    },
    // Добавляем предварительную загрузку зависимостей
    exclude: ['@babel/runtime']
  },
  // Добавляем кэширование
  cacheDir: '.vite',
  // Включаем HMR для быстрой разработки
  hmr: {
    overlay: false
  }
}));
