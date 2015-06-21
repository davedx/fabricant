var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(babel({stage: 0, optional: ["runtime"], modules: "common"}))
    .pipe(gulp.dest("dist"));
});
