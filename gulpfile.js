/*eslint-disable no-mixed-spaces-and-tabs,no-multi-spaces,key-spacing,no-unused-vars*/
"use strict";
(function() {

	var browserSync, dist, gulp, options, prefix, reload, sass, sourcemaps, src, uglify, watch, babel;
	var errorAlert;

	gulp		= require("gulp");
	babel		= require("gulp-babel");
	sass		= require("gulp-sass");
	watch		= require("gulp-watch");
	browserSync	= require("browser-sync");
	prefix		= require("gulp-autoprefixer");
	sourcemaps	= require("gulp-sourcemaps");
	uglify		= require("gulp-uglify");
	reload		= browserSync.reload;

	src = {
		scss:	["__src/scss/*.scss", "__src/scss/**/*.scss"],
		js:		["__src/js/*.js"],
		core:	["*.html"]
	};

	dist = {
		scss:	"assets/css",
		js:		"assets/js"
	};

	options = {
		browserSync: {
			proxy:	"https://bsddoc.dev",
			port:	1337,
			https:	{
				key: "../ssl/bsddoc.dev.key",
				cert: "../ssl/bsddoc.dev.crt"
			}
		},
		prefix: {
			browsers: ["> 5%", "last 4 versions", "firefox > 3.6", "ie > 7"]
		}
	};

	gulp.task("scss", function() {
		return gulp.src(src.scss)
				   .pipe(sourcemaps.init())
				   .pipe(sass())
				   .on("error", errorAlert)
				   .pipe(prefix(options.prefix))
				   .pipe(sourcemaps.write("."))
				   .pipe(gulp.dest(dist.scss))
				   .pipe(reload({stream: true}));
	});

	gulp.task("js", function() {
		return gulp.src(src.js)
				   .pipe(sourcemaps.init())
				   .pipe(babel({presets: ['es2015']}))
				   .on("error", errorAlert)
				   .pipe(sourcemaps.write("."))
				   .pipe(gulp.dest(dist.js))
				   .pipe(reload({stream: true}));
	});

	gulp.task("default", ["scss", "js"], function() {
		browserSync(options.browserSync);

		gulp.watch(src.scss, ["scss"]);
		gulp.watch(src.js, ["js"]);
		gulp.watch(src.core).on("change", reload);
	});

	errorAlert = function(err) {
		console.log(err.toString());
		this.emit("end");
	};

}).call(this);