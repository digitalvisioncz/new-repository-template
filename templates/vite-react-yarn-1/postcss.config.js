export default {
    modules: true,
    map: process.env.NODE_ENV === 'development',
    plugins: {
        stylelint: {},
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-preset-env': {
            stage: 2,
            features: {
                'nesting-rules': true,
                'custom-properties': {
                    disableDeprecationNotice: true,
                },
            },
            importFrom: 'src/assets/styles/queries.css',
        },
        'postcss-reporter': {
            clearReportedMessages: true,
        },
    },
}
