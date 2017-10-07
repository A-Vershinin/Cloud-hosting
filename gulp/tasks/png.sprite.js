'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData = $.gulp.src('./app/img/sprites/png/*.png').pipe($.gp.spritesmith({
        imgName: 'png-sprite.png',
        cssName: '_png-sprite.scss',
        // cssFormat: "scss",
        algorithm: 'left-right',
        padding: 40
    }));

    spriteData.css.pipe($.gulp.dest('app/styles/basic/'));
    // spriteData.img.pipe($.gulp.dest('app/img/'));
    spriteData.img.pipe($.gulp.dest($.config.root + '/img'));
    return spriteData;
  });
};
