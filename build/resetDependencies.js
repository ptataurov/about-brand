const { readdirSync, writeFileSync, readFileSync } = require('fs')
const dirs = require('./dirs')

module.exports = (isPage, targetName) => {
  const path = isPage
    ? `${dirs.pages}/${targetName}/_imports`
    : `${dirs.components}/${targetName}/_imports`

  readdirSync(path).forEach(file => {
    writeFileSync(`${path}/${file}`, '')
  })

  const dependenciesPath = `${dirs.src}/globalDependencies.json`
  const dependencies = JSON.parse(readFileSync(dependenciesPath))

  dependencies[isPage ? 'pages' : 'components'][targetName] = []

  writeFileSync(dependenciesPath, JSON.stringify(dependencies))
}
