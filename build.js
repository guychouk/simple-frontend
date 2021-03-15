const { watch, series, src, dest, parallel } = require('gulp');

const path = require('path');
const webpack = require('webpack-stream');

const configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        test: /\.js?$/,
        include: [ path.resolve(__dirname, 'src') ],
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    ]
  }
};

function packJs() {
  return src('./src/app.js').pipe(webpack(configuration)).pipe(dest('./public'));
}

function copyFavicon() {
  return src('src/favicon.ico').pipe(dest('./public'));
}

function copyStyles() {
  return src('src/styles/**').pipe(dest('./public'));
}

function copyHTML() {
  return src('src/index.html').pipe(dest('./public'));
}

function watcher() {
  watch('./src', { ignoreInitial: false }, SeriesOfBuildTasks);
}

const SeriesOfBuildTasks = series(packJs, parallel(copyHTML, copyFavicon, copyStyles));

exports.watch = watcher;
exports.build = SeriesOfBuildTasks;
