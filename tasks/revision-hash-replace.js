const gulp = require('gulp'),
      revReplace = require('gulp-rev-replace'),
      outputDir = 'cache/',
      baseDir = 'views/partials/'
      manifestFilename = 'rev-manifest.json'

gulp.src(baseDir + 'header.ejs')
  .pipe(revReplace({
    manifest: gulp.src(outputDir + manifestFilename)
  }))
  .pipe(gulp.dest(baseDir));
