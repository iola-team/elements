module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/typescript',
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7', 'ie >= 10'],
      },
    }],
  ],

  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ],
};
