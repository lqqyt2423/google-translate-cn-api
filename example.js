'use strict';

const translate = require('./lib');
const enText = 'hello world';
const cnText = '你好世界';

// English => Chinese
translate(enText, { to: 'zh-cn' }).then(console.log);

// Chinese => English
translate(cnText, { to: 'en' }).then(console.log);

/**
 * 通过domain 参数修改翻译网址，默认值为cn
 * com => https://translate.google.com
 * cn => https://translate.google.cn
 * hk => https://translate.google.hk
 */
translate(enText, { to: 'zh-cn', domain: 'com' }).then(console.log);
