# google-translate-cn-api

use the same servers that [translate.google.cn](https://translate.google.cn/) uses.

## Usage

```javascript
const translate = require('google-translate-cn-api');

let text = 'hello world';


// third param 'cn' => use 'https://translate.google.cn'
translate(text, { to: 'zh-cn' }, 'cn').then(console.log);

// use 'https://translate.google.com'
// translate(text, { to: 'zh-cn' }).then(console.log);
```