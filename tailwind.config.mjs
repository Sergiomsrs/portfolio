/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				surface: 'rgb(var(--color-surface) / <alpha-value>)',
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				muted: 'rgb(var(--color-muted) / <alpha-value>)',
				faint: 'rgb(var(--color-faint) / <alpha-value>)',
				line: 'rgb(var(--color-line) / <alpha-value>)',
				accent: {
					DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
					hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
					violet: 'rgb(var(--color-accent-violet) / <alpha-value>)',
				},
			},
			fontFamily: {
				sans: ['"Onest Variable"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.5s ease-out forwards',
				'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				pulseDot: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.35' },
				},
			},
		},
	},
	plugins: [],
}
