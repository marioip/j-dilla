var gulp = require('gulp'),
	jade = require('gulp-jade'),
	livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	browserify = require('gulp-browserify'),
	gulpif = require('gulp-if'),
	sass = require('gulp-sass');

var env = process.env.NODE_ENV || 'development';
var outputDir = 'dist/';

gulp.task('jade', function(){
	return gulp.src('src/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest(outputDir))
	.pipe(livereload());
});

gulp.task('sass', function(){
	var config = {};

	if (env === 'development'){
		config.sourceComments = 'map';
	}

	if (env === 'production'){
		config.outputStyle = 'compressed';
	}

	return gulp.src('src/sass/main.scss')
		.pipe(sass(config))
		.pipe(gulp.dest(outputDir+'/css'))
		.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify({ debug: env === 'development' }))
		.pipe(gulpif(env === 'production', uglify()))
		.pipe(gulp.dest(outputDir+'/js'))
		.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/**/*.jade', ['jade']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('default', ['jade','sass','js','watch']);