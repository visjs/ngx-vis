'use strict';

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'html' },
        { type: 'json', subdir: '.', file: 'coverage-final.json' },
      ],
    },
  });
};
