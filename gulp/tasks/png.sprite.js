'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData1 = $.gulp.src('./app/img/sprites/png/*@1x.png').pipe($.gp.spritesmith({
      imgName: 'png-icon-sprite@1x.png',
      imgPath: '../img/png-icon-sprite@1x.png',
      cssName: '_png-sprite@1x.scss',
      // cssFormat: "scss",
      algorithm: 'top-down',
      padding: 60
    }));
    spriteData1.css.pipe($.gulp.dest('app/styles/basic/'));
    spriteData1.img.pipe($.gulp.dest($.config.root + '/img'));
    
    var spriteData2 = $.gulp.src('./app/img/sprites/png/*@2x.png').pipe($.gp.spritesmith({
      imgName: 'png-icon-sprite@2x.png',
      imgPath: '../img/png-icon-sprite@2x.png',
      cssName: '_png-sprite@2x.scss',
      // cssFormat: "scss",
      algorithm: 'top-down',
      padding: 60
    }));
    spriteData2.css.pipe($.gulp.dest('app/styles/basic/'));
    spriteData2.img.pipe($.gulp.dest($.config.root + '/img'));
 
    return spriteData1, spriteData2;
  });
}
