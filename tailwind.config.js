module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        maxWidth: {
            '400px': '400px',
            '80%': '80%',
        },
        // height: {
        //     '500px': '500px',
        // },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/line-clamp'),
        // ...
    ],
};
