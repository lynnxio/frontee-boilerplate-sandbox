let mix = require('laravel-mix');
require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.ts('resources/ts/app.ts', 'public/js')
    .sass('resources/sass/styles.scss', 'public/css')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    })
    .purgeCss({
        extend: {
            content: [
                "resources/views/**/*.antlers.html",
            ],
        },
    })
mix.browserSync({
    host: '192.68.56.10',
    port: 3000,
    proxy: 'http://yourdomain.test',
    files: [
        './resources/views/**/*.antlers.html',
        './resources/sass/**/*.scss',
        './resources/ts/**/*.ts'
    ],
    open: false,
    watchOptions: {
        usePolling: true,
        interval: 100,
        ignored: /node_modules/,
        processCssUrls: false,
    }
})

if (mix.inProduction()) {
    mix.version()
        .extract()
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss/nesting'),
//     require('tailwindcss'),
// ])
