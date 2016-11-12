var gulp = require('gulp');
var stylus = require('gulp-stylus');
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

gulp.task('stylus', function() {
    gulp.src('./styl/**/*.styl')
    	.pipe(stylus())
	    .pipe(gulp.dest('style')) // Выводим сгенерированные CSS-файлы в ту же папку по тем же именем, но с другим расширением
});

gulp.task('watch', function(){
    gulp.watch('./styl/**/*.styl', ['stylus'])
    gulp.watch('./style/**/style.css', ['minification'])
    // другие ресурсы
})
