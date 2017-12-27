var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
                browsers: [
                    "last 10 versions",
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "safari < 6",
                    "firefox < 49",
                    "opera < 12.1",
                    "explorer > 9",
                    "iOS >= 6"
                ]
            }))
    .pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']); 
});
gulp.task('default', ['watch', 'sass']);