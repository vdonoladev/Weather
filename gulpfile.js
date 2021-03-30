// Declaration of constants
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');


// Compile scss files to css
gulp.task('sass', gulp.series(() => {
  // Files to process
  return gulp.src([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'src/scss/*.scss'
  ])
    // Compress and convert scss into css
    .pipe(sass({ outputStyle: 'compressed' }))
    // Directory to save the compressed files
    .pipe(gulp.dest('src/css'))
    // Inject into html with browserSync         
    .pipe(browserSync.stream());
}));


// Compile js files after changes
gulp.task('js', gulp.series(() => {
  // Files to process
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
  ])
    // Directory to save the compressed files
    .pipe(gulp.dest('src/js'))
    // Inject into html with browserSync 
    .pipe(browserSync.stream());
}));


// Copy font-awesome css files to src/css
gulp.task('font-awesome', gulp.series(() => {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
    .pipe(gulp.dest('src/css'));
}));


// Copy font-awesome font files to src/webfonts
gulp.task('fonts', gulp.series(() => {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('src/webfonts'))
}));


// Create a local server
gulp.task('serve', gulp.series(['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
}));


// Watch for changes in scss files and inject them
gulp.watch([
  'node_modules/bootstrap/scss/bootstrap.scss',
  'src/scss/*.scss'
], gulp.parallel(['sass']));


// Watch for changes in html files and inject them
gulp.watch([
  'src/*.html'
]).on('change', browserSync.reload);

// Watch for changes in html files and inject them
gulp.watch([
  'src/js/main.js'
]).on('change', browserSync.reload);


// Execute all my tasks
gulp.task('default', gulp.series(['font-awesome', 'fonts', 'js', 'serve']));