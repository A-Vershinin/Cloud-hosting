"use strict";
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

global.$ = {
  dev: isDevelopment,
  package: require("./package.json"),
  config: require("./gulp/config"),
  cssCombConfig: require("./csscomb.json"),
  path: {
    task: require("./gulp/paths/tasks.js"),
    jsFoundation: require("./gulp/paths/js.bundle.js"),
    cssFoundation: require("./gulp/paths/css.bundle.js"),
    app: require("./gulp/paths/app.js")
  },
  gulp: require("gulp"),
  del: require("del"),
  postReporter: require("postcss-reporter"),
  mqpacker: require("css-mqpacker"),
  browserSync: require("browser-sync").create(),
  gp: require("gulp-load-plugins")({
    rename: {
      "gulp-html-minifier": "htmlmin",
      "gulp-css-unit": "cssunit"
    }
  })
};
$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});
$.gulp.task("dev", $.gulp.series(
  "clean",
  $.gulp.parallel(
    "html",
    "fonts",
    "sprite:png",
    "sprite:svg",
    "styles",
    "styles:bundle",
    "js:common",
    "js:bundle",
    "images",
    "imagesSVG",
    "fonts",
    "favicons"
    // 'styles:lint'
    // 'js:lint'
  ),
  $.gulp.parallel(
    "watch",
    "serve"
  )
));

$.gulp.task("default", $.gulp.series(
  "dev",
  $.gulp.parallel(
    "watch",
    "serve"
  )
));
