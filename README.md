# google-translate-cn-api

use the same servers that [translate.google.cn](https://translate.google.cn/) uses.

## Install

```
npm install google-translate-cn-api --save
```

## Usage in your project

```javascript
const translate = require('google-translate-cn-api');

let text = 'hello world';

// third param 'cn' => use 'https://translate.google.cn'
translate(text, { to: 'zh-cn' }, 'cn').then(console.log);

// use 'https://translate.google.com'
// translate(text, { to: 'zh-cn' }).then(console.log);
```
## Command Line usage

### global install

```
npm install -g google-translate-cn-api
```

### usage

Translate English to Chinese:

```
translate hello world
// => 你好，世界
```

Or translate Chinese to English:

```
translate 谷歌
// => Google
```

