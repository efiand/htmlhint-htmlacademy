'use strict';

let data = {};

// обновление настроек из репозитория кодгайда HTML Academy
if (~process.argv.indexOf(`-u`)) {
  const fs = require(`fs`);
  const fetch = require(`node-fetch`);
  const { blueBright, green, red } = require(`chalk`);
  const packageName = `[htmlhint-htmlacademy]`;
  const packagePrefix = blueBright(`${packageName}: `);
  const dirname = __dirname.replace(/\\/g, `/`);

  const updateData = (body) => {
    // разрешение svg-атрибутов (https://github.com/htmlacademy/codeguide/issues/32)
    if (typeof body[`attr-lowercase`] !== `object`) {
      body[`attr-lowercase`] = [];
    }
    let attrLower = body[`attr-lowercase`];
    if (!~attrLower.indexOf(`viewBox`)) {
      attrLower.push(`viewBox`);
    }
    if (!~attrLower.indexOf(`preserveAspectRatio`)) {
      attrLower.push(`preserveAspectRatio`);
    }

    // БЭМ-совместимая конфигурация
    body[`id-class-value`] = false;

    data = JSON.stringify(body);
    fs.writeFile(`${dirname}/htmlhintrc.json`, data, () => {
      console.info(packagePrefix + green(`properties list successfully updated!`));
    });
  };

  fetch(`https://raw.githubusercontent.com/htmlacademy/codeguide/master/.htmlhintrc`)
    .then((res) => res.json())
    .then(updateData)
    .catch(() => {
      console.error(packagePrefix + red(`update error, run "${packageName} -u"`));
    });
} else {
  data = require(`./htmlhintrc.json`);
}

module.exports = data;