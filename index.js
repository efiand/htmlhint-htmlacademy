'use strict';

// обновление настроек из репозитория кодгайда HTML Academy
if (process.argv.indexOf(`-u`) !== -1) {
  require(`./update`)((body) => {
    if (typeof body[`attr-lowercase`] !== `object`) {
      body[`attr-lowercase`] = [];
    }
    let attrLower = body[`attr-lowercase`];

    // разрешение svg-атрибутов (https://github.com/htmlacademy/codeguide/issues/32)
    if (!~attrLower.indexOf(`viewBox`)) {
      attrLower.push(`viewBox`);
    }
    if (!~attrLower.indexOf(`preserveAspectRatio`)) {
      attrLower.push(`preserveAspectRatio`);
    }

    // БЭМ-совместимая конфигурация
    body[`id-class-value`] = false;

    return body;
  });
}

module.exports = require(`./data.json`);
