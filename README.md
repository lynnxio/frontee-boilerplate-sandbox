# Frontee Boilerplate + Statamic

![Imgur](https://i.imgur.com/JmHBCwL.png)

Complete boilerplate for front-end development.

- [Frontee Boilerplate + Statamic](#frontee-boilerplate--statamic)
  - [🚶 Author Stories](#-author-stories)
  - [🎯 Objectives of this Front-end boilerplate](#-objectives-of-this-front-end-boilerplate)
  - [🛠️ What is the features included?](#️-what-is-the-features-included)
  - [💻 What to do next?](#-what-to-do-next)
  - [🔎 Tips and Tricks](#-tips-and-tricks)
  - [📚 Reading Materials:](#-reading-materials)

## 🚶 Author Stories

The creation of this boilerplate is based on my experiences of development which half of the clients require only Plain `HTML, CSS and JS` file for their websites as requirements. However, the given deadline is only 5 days working days which is too tight for me. Below the issues that I have been encounter.

1. Hard to debug Javascripts.
2. Conflict in name and variables in SASS.
3. Repopulating content each time there is styles changes because of huge amount of content.
4. Keep F5 to refresh the browser.
5. Resources file to big which increase the website load times.
6. Messy code which make it hard to find and read.

The boileplate is currently solve my listed problem above. Now, you only focus on your coding and output. From 5 days now you can finish it in 3 days.

## 🎯 Objectives of this Front-end boilerplate

1. Clean Code. 
2. Smooth Code Experience. 
3. Reduce development times.
4. Comply to the best practice of code guidelines.
5. Increase the performance of your website.

## 🛠️ What is the features included?

1. ✔️ [Statamic](https://statamic.com/): A Comprehensive CMS for populating your content with Antlers Templating. 
2. ✔️ [Sass](https://sass-lang.com/): Organized code and file structures.
3. ✔️ [Typescript](https://github.com/microsoft/TypeScript#:~:text=TypeScript%20is%20a%20language%20for%20application%2Dscale%20JavaScript.%20TypeScript%20adds%20optional%20types%20to%20JavaScript%20that%20support%20tools%20for%20large%2Dscale%20JavaScript%20applications%20for%20any%20browser%2C%20for%20any%20host%2C%20on%20any%20OS.%20TypeScript%20compiles%20to%20readable%2C%20standards%2Dbased%20JavaScript.): Reduce headache debugging your Javascript.
4. ✔️ [Stylelint](https://stylelint.io/): Clean and standardize your sass code.
5. ✔️ [Laravel Mix](https://laravel-mix.com/docs/6.0/what-is-mix): Simple command, Versioning and Minify.
6. ✔️ [Browsersync](https://laravel-mix.com/docs/6.0/browsersync): Enabled (Auto reload browser).
7. 🚧 [Codesplitting](https://laravel-mix.com/docs/6.0/extract): Reduce Compilation time by compiling only for file that has been changed.
8. ✔️ [PurgeCss](https://purgecss.com/): Remove unused class from CSS file to reduce load time on the client.
9. ✔️ [Versioning](https://laravel-mix.com/docs/6.0/versioning): Cache busting
10. ✔️ [Static Site Generation](https://github.com/statamic/ssg): Compile your website into static html files. (Optional)

## 💻 What to do next?
1. Setup localhost (Homestead recommended).
2. Clone/install this boilerplate on your local machines.
3. Run `npm install`
4. Open `webpack.mix.js` files and configure the browsersync setting based-on your localhost machines.
5. Run `npm run watch` to enable auto reload browser on file changes.
6. Run `npm run prod` to compile the resources file for productions (minify, versioning and purge unused class).
7. Additional:
   - Run `npm run lint-fix` to fix error and detect sass code that not comply with standard guideline.
   - Run `php please ssg:generate` to generate static website files.

## 🔎 Tips and Tricks

1. ALWAYS START YOUR DEVELOPMENT FROM [**MOBILE FIRST DESIGN**](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00).
2. **SASS**: Use `../` for your url to allow the [url processing](https://laravel.com/docs/9.x/mix#url-processing) to prevent broken link. For example, `url(../path/file.png)`. Important for static Site generation.
3. **SASS**: Use [BEM Naming Convention](http://getbem.com/naming/) or use [SuitCSS](https://suitcss.github.io/)
4. Run `npm run watch-poll` instead of `npm run watch` if your browser doesnt autoreload when you make file changes.
5. **SASS**: Use `~` to import files from node_modules. For example, `~bootstrap/scss/bootstrap.scss`.

## 📚 Reading Materials:

1. [Learn **Sass** best practives](https://matthewelsom.com/blog/simple-scss-playbook.html)
2. [Learn more about **Laravel Mix**](https://laravel-mix.com/docs/6.0/installation)
3. [Learn more about **Typescript**](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
