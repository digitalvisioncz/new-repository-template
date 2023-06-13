module.exports = {
    plugins: {
        'postcss-composes-enhanced': {},
        'postcss-import': {},
        // '@csstools/postcss-global-data': {
        //     files: [
        //         './src/assets/styles/variables/breakpoints.css',
        //     ],
        // },
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 2,
            features: {
                'custom-media-queries': true,
                'nesting-rules': true,
            },
        },
        'postcss-sort-media-queries': {
            sort: 'mobile-first',
        },
    },
};
