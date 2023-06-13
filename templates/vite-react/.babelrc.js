const config = {
    presets: [
        [
            '@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ], [
            '@babel/preset-react', {
                runtime: 'automatic',
            },
        ],
    ],
    plugins: [],
};

if (isDevelopment) {
    config.plugins.push(moduleResolver);
}

module.exports = config;
