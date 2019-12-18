# google-translate-cn-api

## 功能

- node.js 实现谷歌翻译 api
- 命令行工具 command line

## 命令行工具 command line

### 全局安装

```bash
npm install -g google-translate-cn-api
```

### 使用

```bash
translate hello world
# => 你好，世界
translate 你好，世界
# => hello world

# 自定义翻译状态
translate --to=cn hello world
translate --to=en 你好，世界

# 自定义翻译状态简写
translate -c hello world
translate -e 你好，世界

# 也可直接通过管道或重定向翻译
echo hello world | translate
cat some.txt | translate
translate < some.txt
```

## 在项目中使用

### 安装

```bash
npm install google-translate-cn-api --save
```

### 使用示例

```javascript
(async () => {
  // English => Chinese
  await translate('hello world', { to: 'zh-cn' })
    .then(console.info)
    .catch(console.error);

  // Chinese => English
  await translate('你好世界', { to: 'en' })
    .then(console.info)
    .catch(console.error);
})();
```

更多示例和输出请参考 [`example.js`](./example.js)

## 感谢

[google-translate-api](https://github.com/matheuss/google-translate-api)
