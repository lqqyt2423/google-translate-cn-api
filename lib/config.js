'use strict';

// cache config

const Configstore = require('configstore');

const keysfile = 'google-translate-cn-api';
const fileconfig = new Configstore(keysfile);

const configs = new Map();

module.exports = {
  get(key) {
    let val = configs.get(key);
    if (val) return val;

    val = fileconfig.get(key);
    if (val) {
      configs.set(key, val);
      return val;
    }

    return null;
  },

  set(key, val) {
    configs.set(key, val);
    fileconfig.set(key, val);
  },
};
