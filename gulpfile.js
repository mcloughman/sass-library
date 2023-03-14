const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

// this function will comppile our scss from shinobi and it's subdirectories and pipe it into css and pipe it into our css folder. we use the asterisk because we may have multiple scss files
function buildStyles() {
  return (
    src("shinobi/**/*.scss")
      .pipe(sass())
      // purgecss will look at our html files in the root directory to see what css is required. Then it will purge the unused css rules from the index.css
      .pipe(purgecss({ content: ["*.html"] }))
      .pipe(dest("css"))
  );
}

// this function will watch our sass file and update accordingly. And now since we added purgecss, we will have it watch out html files for updates as well
function watchTask() {
  watch(["shinobi/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
