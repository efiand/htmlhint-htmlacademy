# htmlhint-htmlacademy
Настройки проверки HTML с помощью htmlhint по [актуальному кодгайду](https://github.com/htmlacademy/codeguide/blob/master/.htmlhintrc) HTML Academy.

## Установка

```
npm install --save-dev htmlhint-htmlacademy
```

## Использование

Пример кода в `gulpfile.js`:

```js
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var htmlhintConfig = require('htmlhint-htmlacademy');

gulp.task('html', function () {
  return gulp.src('source/**/*.html')
    .pipe(htmlhint(htmlhintConfig))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('build'));
});
```

## Обновление

Запустите из корня проекта:

```
node node_modules/htmlhint-htmlacademy -u
```

## Благодарности

* [HTML Academy](https://codeguide.academy) – за кодгайд.
