const gulp = require('gulp'),
      rev = require('gulp-rev'),
      revReplace = require('gulp-rev-replace'),
      inputDir = 'public/',
      outputDir = 'cache/',
      baseDir = 'views/'
      manifestFilename = 'rev-manifest.json'

gulp.src([
  inputDir + 'css/*.css'
])
  .pipe(rev())
  .pipe(gulp.dest(outputDir))
  .pipe(rev.manifest(manifestFilename))
  .pipe(gulp.dest(outputDir))
