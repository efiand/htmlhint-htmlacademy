'use strict';

// обновление настроек из репозитория кодгайда HTML Academy
if (process.argv.indexOf(`-u`) !== -1) {
  require(`./update`)((body) => body);
}

module.exports = require(`./data.json`);
