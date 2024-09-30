import type { Config } from 'tailwindcss';
import tailwindcssAnimated from 'tailwindcss-animated';
import tailwindcssTypography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            }
        }
    },
    plugins: [tailwindcssAnimated, tailwindcssTypography, daisyui],
    daisyui: {
        themes: ['light']
    }
};
export default config;
