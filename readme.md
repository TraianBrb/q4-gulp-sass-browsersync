# Q4 Developing with Gulp, Sass and browserSync

## Getting Started

The Build folder contains dev and production subfolders:
* dev subfolder contains the css that will be injected in the browser
* production subfolder contains the css the will be copied in the cms

### Prerequisites

You need to install node.js & npm

### Installing

From the root directory (where package.json is located), open the terminal and run

```
npm i
```

## Running

Run in terminal

```
gulp
```

It should open (http://localhost:3000)
Now you are using gulp and browsersync.

For more information check gulpfile.js file.

## Built With

* [Gulp](https://gulpjs.com/) - Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
* [Browser-sync](https://www.npmjs.com/package/browser-sync) - Keep multiple browsers & devices in sync when building websites.
* [Gulp-sass](https://www.npmjs.com/package/gulp-sass) - Used to compile SASS files into CSS
* [Gulp-string-replace](https://www.npmjs.com/package/gulp-string-replace) - Used to replace url() paths
* [Gulp-autoprefixer](https://www.npmjs.com/package/autoprefixer) - Used to fix web browser differences
* [Gulp-postcss](https://github.com/postcss/gulp-postcss) - Gulp plugin to pipe CSS through several plugins, but parse CSS only once.
* [Postcss-easey-media-query](https://www.npmjs.com/package/postcss-easy-media-query) - Postcss plugin for easily create media queries.
* [Postcss-responsive-type](https://www.npmjs.com/package/postcss-responsive-type) - PostCSS plugin for automagical responsive typography.

## Authors

* **Traian Barbu** - [GitHub](https://github.com/TraianBrb)

## Acknowledgments

* IMC
