const gulp            = require('gulp');
const browserSync     = require('browser-sync');
const sass            = require('gulp-sass');
const runSequence     = require('run-sequence');
const del             = require('del');
const replace         = require('gulp-string-replace');
const autoprefixer    = require('autoprefixer');
const postcss         = require('gulp-postcss');
const easyMediaQuery  = require('postcss-easy-media-query');
const responsiveType  = require('postcss-responsive-type');

// Static Server + watching scss/html files
gulp.task('serve', ['build'], function() {
    browserSync({
        proxy: // Replace this comment with the preview URL e.g: 'https://q4implementation3.s3.q4web.com/preview/preview.aspx?SectionId=2237b9ec-83f2-4f43-a172-a84c056c40fa&LanguageId=1&ResetDate=1',
        files: ['build/**'],
        serveStatic: ['build'],
        // rewriteRules replaces the css files from the CMS with local css files
        rewriteRules: [
            {
                match: new RegExp('/preview/files/css/client_28520.css'),
                fn: function() {
                    return 'build/dev/css/client.css';
                }
            },
            {
                match: new RegExp('/preview/files/css/global_28771.css'),
                fn: function() {
                    return 'build/dev/css/global.css';
                }
            }
        ]
    });

    // Gulp.watch is watching the provided path, and on change, will refresh the browser window
    gulp.watch("source/scss/*.scss", ['build']).on('change', browserSync.reload);
});

// Build task that runs once in the beggining
gulp.task('build', function(cb) {
    runSequence(
        'clean',
        'sass',
        'replace',
        cb);
});

// Replace task will look in global.css file in url() and will replace '../' with the provided link
gulp.task('replace', function() {
    gulp.src(["./build/production/css/*.css"])
        .pipe(replace(new RegExp('\\.{2}\/', 'g'), // Replace this comment with your source files e.g: 'https://q4implementation3.s3.q4web.com/preview/files/'))
        .pipe(gulp.dest('./build/dev/css'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 2 versions']
        }),
        responsiveType,
        easyMediaQuery
    ];

    return gulp.src("source/scss/*.scss")
        .pipe(sass({
            'sourceComments': true
        }))
        .pipe(postcss(processors))
        .pipe(gulp.dest("build/production/css"))
        .pipe(browserSync.stream());
});

// Deletes the build folder
gulp.task('clean', function() {
    console.log('🔥 Cleans all files in build folder');
    return del(['build']);
});

gulp.task('default', ['serve']);
