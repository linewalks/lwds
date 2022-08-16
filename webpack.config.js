const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const sass = require('node-sass')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  mode: isProduction ? 'production' : 'development',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
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

const appConfig = Object.assign({}, config, {
  entry: { app: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
  },
})

const iconsConfig = Object.assign({}, config, {
  entry: { icons: './src/components/Icon/Icons/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
  },
})

const stylesConfig = Object.assign({}, config, {
  entry: { styles: './src/assets/styles/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
  },
})

const typoConfig = Object.assign({}, config, {
  entry: {
    typography: './src/assets/styles/index.scss',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
})

module.exports = [appConfig, iconsConfig, stylesConfig, typoConfig]
