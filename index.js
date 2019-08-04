'use strict';

// обновление настроек из репозитория кодгайда HTML Academy
if (~process.argv.indexOf('-u')) {
  const fs = require('fs');
  const fetch = require('node-fetch');
  const packageName = '[htmlhint-htmlacademy]';
  const dirname = __dirname.replace(/\\/g, '/');
  
  fetch('https://raw.githubusercontent.com/htmlacademy/codeguide/master/.htmlhintrc')
  .then((res) => res.json())
  .then((body) => {
	// разрешение svg-атрибутов (https://github.com/htmlacademy/codeguide/issues/32)
	body['attr-lowercase'] = ['viewBox', 'preserveAspectRatio'];

    const data = JSON.stringify(body);
    fs.writeFile(dirname + '/htmlhintrc.json', data, () => {
      console.info(packageName + ': properties list successfully updated!');
    });
  })
  .catch(() => {
    console.error(packageName + ': update error, run "' + packageName + ' -u"');
  });
}

module.exports = require('./htmlhintrc.json');
