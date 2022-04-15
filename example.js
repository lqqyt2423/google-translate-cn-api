'use strict';

const translate = require('./');

(async () => {
  // English => Chinese
  await translate('hello world', { to: 'zh-cn' })
    .then(console.info)
    .catch(console.error);

  console.info('\n\n');

  // Chinese => English
  await translate('你好世界', { to: 'en' })
    .then(console.info)
    .catch(console.error);

  console.info('\n\n');

  // with raw data response
  await translate('hello world', { to: 'zh-cn', raw: true })
    .then(console.info)
    .catch(console.error);

  console.info('\n\n');

  /**
   * 通过 domain 参数修改翻译网址，默认值为 cn
   * com => https://translate.google.com
   * cn => https://translate.google.cn
   * hk => https://translate.google.hk
   */
  await translate('hello world', { to: 'zh-cn', domain: 'cn' })
    .then(console.info)
    .catch(console.error);
})();


// output

// { text: '你好，世界',
//   from:
//    { language: { didYouMean: false, iso: 'en' },
//      text:
//       { autoCorrected: false, value: 'hello world', didYouMean: true } },
//   raw: '' }



// { text: 'Hello world',
//   from:
//    { language: { didYouMean: false, iso: 'zh-CN' },
//      text: { autoCorrected: false, value: '你好世界', didYouMean: true } },
//   raw: '' }



// { text: '你好，世界',
//   from:
//    { language: { didYouMean: false, iso: 'en' },
//      text:
//       { autoCorrected: false, value: 'hello world', didYouMean: true } },
//   raw:
//    '[[["你好，世界","hello world",null,null,1]\n,[null,null,"Nǐ hǎo, shìjiè"]\n]\n,null,"en",null,null,[["hello world",null,[["你好，世界",1000,true,false]\n,["你好世界",1000,true,false]\n]\n,[[0,11]\n]\n,"hello world",0,0]\n]\n,0.8867333,[]\n,[["en"]\n,null,[0.8867333]\n,["en"]\n]\n]\n' }



// { text: '你好，世界',
//   from:
//    { language: { didYouMean: false, iso: 'en' },
//      text:
//       { autoCorrected: false, value: 'hello world', didYouMean: true } },
//   raw: '' }
