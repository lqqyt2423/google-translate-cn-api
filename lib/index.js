'use strict';

const querystring = require('querystring');
const rp = require('request-promise');
const languages = require('./languages');

const translate = async (text, opts) => {
  opts = opts || {};

  [opts.from, opts.to].forEach(function (lang) {
    if (lang && !languages.isSupported(lang)) {
      throw new Error('The language \'' + lang + '\' is not supported');
    }
  });
  opts.from = opts.from || 'auto';
  opts.to = opts.to || 'en';
  opts.from = languages.getCode(opts.from);
  opts.to = languages.getCode(opts.to);
  opts.domain = opts.domain || 'cn';

  let url = `https://translate.google.${opts.domain}/translate_a/single`;
  const data = {
    client: 'gtx',
    sl: opts.from,
    tl: opts.to,
    hl: opts.to,
    dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
    otf: 1,
    ssel: 0,
    tsel: 0,
    kc: 7,
  };
  url += '?' + querystring.stringify(data);

  const raw = await rp.post(url).form({ q: text });
  const body = handleBody(raw, opts);

  return body;
};

module.exports = translate;

function handleBody(raw, opts) {
  const result = {
    text: '',
    from: {
      language: {
        didYouMean: false,
        iso: ''
      },
      text: {
        autoCorrected: false,
        value: '',
        didYouMean: false
      }
    },
    raw: ''
  };

  if (opts.raw) result.raw = raw;

  const body = JSON.parse(raw);
  body[0].forEach(function (obj) {
    if (obj[0] !== null) result.text += obj[0];
  });

  if (body[2] === body[8][0][0]) {
    result.from.language.iso = body[2];
  } else {
    result.from.language.didYouMean = true;
    result.from.language.iso = body[8][0][0];
  }

  if (body[5] && body[5][0] && body[5][0][0]) {
    let str = body[5][0][0];

    str = str.replace(/<b><i>/g, '[');
    str = str.replace(/<\/i><\/b>/g, ']');

    result.from.text.value = str;

    if (body[5][0][5] === 1) {
      result.from.text.autoCorrected = true;
    } else {
      result.from.text.didYouMean = true;
    }
  }

  return result;
}
