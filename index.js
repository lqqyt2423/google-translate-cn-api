'use strict';

const rawTranslate = require('@vitalets/google-translate-api');

const languages = rawTranslate.languages;
languages['zh-cn'] = languages['zh-CN'];
languages['zh-tw'] = languages['zh-TW'];

module.exports = function translate(text, opts, gotopts) {
  opts = opts || {};
  opts.tld = 'cn';

  if (opts.domain) opts.tld = opts.domain;

  return rawTranslate(text, opts, gotopts);
};
