// Configs for Stem Algorithm

// Node Modules & Global Configs
var path = require('path'),
    globalConfigs = require(path.resolve(__dirname, './globalConfigs'));

// Dir Paths
var LIB_DIR  = globalConfigs.paths.LIB_DIR;
    UTIL_DIR = globalConfigs.paths.UTIL_DIR;

// Export Configs
module.exports = {
  modules : {
    'regexDict'      : require(LIB_DIR + 'regexDict'),
    'enExceptions'   : require(LIB_DIR + 'enExceptions'),
    // 'stemRuleMapper' : require(LIB_DIR + 'stemRules')
  },
  languageStemRules : {
    'en' : require(UTIL_DIR + 'enStemRules')
  }
};
