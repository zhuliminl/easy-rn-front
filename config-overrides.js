const { alias, configPaths } = require('react-app-rewire-alias')
const { override, addBabelPlugins, addBabelPresets } = require('customize-cra')


const aliasMap = configPaths('./tsconfig.paths.json') // or jsconfig.paths.json

function someElse(config) {
  return {
    ...config,
    ...override(
      ...addBabelPlugins(
        "@emotion/babel-plugin",
      ),
      ...addBabelPresets(
        '@emotion/babel-preset-css-prop',
        [
          "@babel/preset-react",
          { "runtime": "automatic", "importSource": "@emotion/react" }
        ],
      )
    )
  }
}

module.exports = function _override(config) {
  const modifiedConfig = alias(aliasMap)(config)
  return someElse(modifiedConfig)
}