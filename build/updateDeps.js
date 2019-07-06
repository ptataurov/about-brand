const { writeFileSync, readFileSync } = require('fs')

const { getDirectoriesBasenames } = require('./utils.js')

const updateDependencies = require('./updateDep.js')
const dirs = require('./dirs')

const pageNames = getDirectoriesBasenames(`${dirs.pages}`)
const componentNames = getDirectoriesBasenames(`${dirs.components}`)

const dependenciesPath = `${dirs.src}/globalDependencies.json`

const globalDependencies = JSON.parse(readFileSync(dependenciesPath))

globalDependencies.pages = {}
globalDependencies.components = {}

writeFileSync(dependenciesPath, JSON.stringify(globalDependencies))

pageNames.forEach(name => {
  updateDependencies(true, name)
})

componentNames.forEach(name => {
  updateDependencies(false, name)
})
