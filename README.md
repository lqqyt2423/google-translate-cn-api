# google-translate-cn-api

## Usage

use .cn google website replace .com google website because of the latter can not access in China.

```javascript
  const translate = require('./lib');

  let text = 'hello world';


  // third param 'cn' => use 'https://translate.google.cn'
  translate(text, { to: 'zh-cn' }, 'cn').then(console.log);

  // use 'https://translate.google.com'
  // translate(text, { to: 'zh-cn' }).then(console.log);
```