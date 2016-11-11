var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('autoprefixer', function() {
  // place code for your default task here
  return gulp.src('css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 20 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('style'));
});

gulp.task('minification', function () {
    gulp.src('style/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('style'));
});

gulp.task('less', function () {
  return gulp.src('./less/**/style.less')
    .pipe(less())
    .pipe(autoprefixer({
           browsers: ['last 20 versions'],
           cascade: false
       }))
     .pipe(gulp.dest('style'))
});

gulp.task('watch', function(){
    gulp.watch('./less/**/*.less', ['less'])
    gulp.watch('./style/**/style.css', ['minification'])
    // другие ресурсы
})
