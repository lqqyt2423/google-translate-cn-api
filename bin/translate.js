#!/usr/bin/env node

'use strict';

const translate = require('..');

const argv = process.argv.slice(2);

const enConfig = ['--to=en', '-e'];
const cnConfig = ['--to=cn', '-c'];

const config = enConfig.concat(cnConfig);

async function run() {
  // 从命令行参数中取到需要翻译的文本
  let text = argv.filter(t => config.indexOf(t) === -1).join(' ');
  if (!text) {
    // 判断仅在管道或重定向情况下读取 stdin 的数据
    if (!process.stdin.isTTY) {
      // 尝试从 stdin 中拿到需要翻译的文本
      text = await new Promise(resolve => {
        const body = [];
        process.stdin.on('readable', () => {
          let chunk;
          while ((chunk = process.stdin.read()) !== null) {
            body.push(chunk);
          }
        });
        process.stdin.on('end', () => {
          resolve(String(Buffer.concat(body)));
        });
      });
    }
    if (!text) {
      console.info('请输入需要翻译的文字');
      process.exit();
    }
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

  const res = await translate(text, { to: translateTo });
  console.info(res.text);
}

run().catch(console.error);
