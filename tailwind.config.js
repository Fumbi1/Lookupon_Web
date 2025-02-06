/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		  keyframes: {
			bounce: {
			  '0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(-4px)' }
			}
		  },
		  animation: {
			bounce: 'bounce 1s infinite'
		  }
		}
	  },
	  variants: {
		extend: {},
	  },
	plugins: [],
  }