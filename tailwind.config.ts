import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        imagehero:
          'conic-gradient(from 180deg at 50% 70% in oklch longer hue, oklch(14.08% 0.004 285.82), oklch(98.51% 0 0)), conic-gradient(at 50% 30% in oklch longer hue, oklch(98.51% 0 0), oklch(14.08% 0.004 285.82));'
      },
      backgroundSize: {
        sizehero: '100% 50%'
      },
      backgroundPosition: {
        positionhero: '100% 0,0 100%'
      }
    }
  },
  plugins: []
}
export default config
