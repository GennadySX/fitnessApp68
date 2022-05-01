module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-spread',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          cuteapp: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  sourceMaps: true,
};
