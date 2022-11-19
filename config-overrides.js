const { alias, configPaths } = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.paths.json') // or jsconfig.paths.json

function someElse(config) {
  return {
    ...config,
  }
}

module.exports = function _override(config) {
  const modifiedConfig = alias(aliasMap)(config)
  return someElse(modifiedConfig)
}