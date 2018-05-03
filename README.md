# google-translate-cn-api

谷歌翻译接口。

## 安装

```
npm install google-translate-cn-api --save
```

## 在项目中使用

```javascript
const translate = require('google-translate-cn-api');
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
```
## 命令行工具

### 需全局安装

```
npm install -g google-translate-cn-api
```

### 使用

```
translate hello world
// => 你好，世界

translate 你好，世界
// => hello world
```

自定义翻译状态：

```
translate --to=cn hello world
// => 你好，世界

translate --to=en 你好，世界
// => hello world
```

自定义翻译状态简写：

```
translate -c hello world
// => 你好，世界

translate -e 你好，世界
// => hello world
```
