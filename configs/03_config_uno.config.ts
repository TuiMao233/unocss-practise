// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['m-1', { margin: '0.25rem' }]
  ],
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  theme: {
    colors: {
      primary: 'var(--primary-color)'
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
    }
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          --primary-color: #16a8f8;
        }
      `
    }
  ]
})
