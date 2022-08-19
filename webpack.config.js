const sass = require('node-sass')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // {
      //   test: /\.(svg)(\?.*)?$/,
      //   loader: 'file-loader',
      //   query: { name: 'static/media/[name].[hash:8].[ext]' },
      // },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    },
  },
}
