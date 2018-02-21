# google-translate-cn-api

谷歌翻译接口。

## 安装

```
npm install google-translate-cn-api --save
```

## 在项目中使用

```javascript
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
```
## 命令行工具

### 需全局安装

```
npm install -g google-translate-cn-api
```

### 使用

命令行中输入以下命令，默认为将英文翻译至中文：

```
translate hello world
// => 你好，世界
```

如需将中文翻译至英文，需添加额外参数：

```
translate --to=en 谷歌
// => Google

// 或
translate -e 谷歌
// => Google
```
