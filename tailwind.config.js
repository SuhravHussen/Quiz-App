module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        maxWidth: {
            '400px': '400px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/line-clamp'),
        // ...
    ],
};
