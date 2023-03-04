const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const buildConfig = merge(baseConfig, {
   mode: 'production',
   plugins: [
      new CleanWebpackPlugin(),
      new ImageMinimizerPlugin({
            minimizer: {
               implementation: ImageMinimizerPlugin.imageminMinify,
               options: {
                  plugins: [
                     ['gifsicle', {interlaced: true}],
                     ['jpegtran', {progressive: true}],
                     ['mozjpeg', {progressive: true, quality: 40}],
                     ['optipng', {optimizationLevel: 5}],
                     ['svgo', {
                        name: 'preset-default',
                        params: {
                           overrides: {
                              convertShapeToPath: {
                                 convertArcs: true
                              },
                              convertPathData: false
                           }
                        }
                     }]
                  ]
               }
            }
         }),
   ]
});
module.exports = new Promise((resolve, reject) => {
   resolve(buildConfig);
})