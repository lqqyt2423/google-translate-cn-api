const translate = require('./lib');

let text = 'hello world';


// third param 'cn' => use 'https://translate.google.cn'
translate(text, { to: 'zh-cn' }, 'cn').then(console.log);

// use 'https://translate.google.com'
// translate(text, { to: 'zh-cn' }).then(console.log);