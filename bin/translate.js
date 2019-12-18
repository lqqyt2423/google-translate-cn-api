#!/usr/bin/env node

'use strict';

const translate = require('../lib');

const argv = process.argv.slice(2);

const enConfig = ['--to=en', '-e'];
const cnConfig = ['--to=cn', '-c'];

const config = enConfig.concat(cnConfig);

// 要翻译的文本
const text = argv.filter(t => config.indexOf(t) === -1).join(' ');
if (!text) {
  console.info('请输入需要翻译的文字');
  process.exit();
}

// 判断中译英或英译中
let translateTo;

// 用户是否给定了翻译的指令
enConfig.forEach(c => {
  if (argv.indexOf(c) > -1) translateTo = 'en';
});

cnConfig.forEach(c => {
  if (argv.indexOf(c) > -1) translateTo = 'zh-cn';
});

// 如果为给定翻译指令，程序自己判断翻译方式
if (!translateTo) {
  // 给定翻译文本中文字符和英文字符计数
  let enCount = 0;
  let cnCount = 0;
  text.split('').forEach(char => {
    if (/[a-zA-Z]/.test(char)) enCount++;
    if (/[\u4e00-\u9fa5]/.test(char)) cnCount++;
  });

  if (enCount > cnCount) {
    translateTo = 'zh-cn';
  } else {
    translateTo = 'en';
  }
}

translate(text, { to: translateTo }).then(res => {
  console.info(res.text);
}).catch(console.error);
