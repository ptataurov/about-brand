const { mkdirSync, writeFileSync, readFileSync } = require('fs')
const { getDirectoriesBasenames } = require('./utils.js')
const dirs = require('./dirs')

const pageName = process.argv[2]
const existingPages = getDirectoriesBasenames(`${dirs.pages}`)

if (existingPages.includes(pageName)) {
  throw new Error(`Page with the name ${pageName} already exists`)
}

const pagePath = `${dirs.pages}/${pageName}`

mkdirSync(pagePath)

mkdirSync(`${pagePath}/_imports`)

for (let ext of ['js', 'scss', 'pug']) {
  writeFileSync(`${pagePath}/_imports/import.${ext}`, '')
}

writeFileSync(
  `${pagePath}/${pageName}.scss`,
  `@import '~@/assets/scss/common';
@import './_imports/import'
`
)

writeFileSync(
  `${pagePath}/${pageName}.pug`,
  `extends ../layout
include ./_imports/import`
)

writeFileSync(
  `${pagePath}/${pageName}.js`,
  `import './${pageName}.scss'
import './_imports/import'
`
)

writeFileSync(`${pagePath}/dependencies.json`, '[]')

const dependenciesPath = `${dirs.src}/globalDependencies.json`

const dependencies = JSON.parse(readFileSync(dependenciesPath))

dependencies.pages[pageName] = []

writeFileSync(dependenciesPath, JSON.stringify(dependencies))
