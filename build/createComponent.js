const { mkdirSync, writeFileSync, readFileSync } = require('fs')
const { getDirectoriesBasenames } = require('./utils.js')
const dirs = require('./dirs')

const componentName = process.argv[2]
const existingComponents = getDirectoriesBasenames(`${dirs.components}`)

if (existingComponents.includes(componentName)) {
  throw new Error(`Component with the name ${componentName} already exists`)
}

const componentPath = `${dirs.components}/${componentName}`

mkdirSync(componentPath)

writeFileSync(
  `${componentPath}/${componentName}.scss`,
  `@import '~@/assets/scss/mixins';
@import './_imports/import';`
)
writeFileSync(
  `${componentPath}/${componentName}.pug`,
  `mixin ${componentName}
  include ./_imports/import
`
)
writeFileSync(
  `${componentPath}/${componentName}.js`,
  `import './_imports/import'`
)

mkdirSync(`${componentPath}/_imports`)

for (let ext of ['js', 'scss', 'pug']) {
  writeFileSync(`${componentPath}/_imports/import.${ext}`, '')
}

writeFileSync(`${componentPath}/dependencies.json`, '[]')

const dependenciesPath = `${dirs.src}/globalDependencies.json`

const dependencies = JSON.parse(readFileSync(dependenciesPath))

dependencies.components[componentName] = []

writeFileSync(dependenciesPath, JSON.stringify(dependencies))
