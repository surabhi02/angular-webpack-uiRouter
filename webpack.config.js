var webpack = require('webpack');

module.exports = {
    context: __dirname,
    watch: true,
    entry: {
        app: './app/app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
};
