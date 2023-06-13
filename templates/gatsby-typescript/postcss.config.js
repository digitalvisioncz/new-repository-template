module.exports = () => ({
    plugins: {
        'postcss-import': {},
        stylelint: {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 1,
        },
        'css-mqpacker': {
            sort: true,
        },
        cssnano: process.env.NODE_ENV !== 'development',
    },
});
