const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// this function will comppile our scss from shinobi and it's subdirectories and pipe it into css and pipe it into our css folder. we use the asterisk because we may have multiple scss files
function buildStyles() {
  return src("shinobi/**/*.scss").pipe(sass()).pipe(dest("css"));
}

// this function will watch our sass file and update accordingly
function watchTask() {
  watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
