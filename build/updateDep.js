const { writeFileSync, readFileSync, appendFileSync } = require('fs')
const dirs = require('./dirs')
const resetDependencies = require('./resetDep.js')

const updateDependencies = (isPage, targetName) => {
  resetDependencies(isPage, targetName)

  const property = isPage ? 'pages' : 'components'

  const targetPath = isPage ? dirs.pages : dirs.components
  const dependenciesPath = `${dirs.src}/globalDependencies.json`

  const targetDependencies = JSON.parse(
    readFileSync(`${targetPath}/${targetName}/dependencies.json`)
  )

  const globalDependencies = JSON.parse(readFileSync(dependenciesPath))

  const addDependence = dependence => {
    globalDependencies[property][targetName].push(dependence)

    writeFileSync(dependenciesPath, JSON.stringify(globalDependencies))
  }

  const rewriteFiles = dependence => {
    const jsPath = isPage ? '../../../components' : '../..'

    const map = {
      js: `import '${jsPath}/${dependence}/${dependence}'\n`,
      scss: `@import '~@/components/${dependence}/${dependence}';\n`,
      pug: `include ~@/components/${dependence}/${dependence}\n`
    }

    for (let key in map) {
      const data = map[key]
      appendFileSync(`${targetPath}/${targetName}/_imports/import.${key}`, data)
    }
  }

  const isContains = dependence =>
    globalDependencies[property][targetName].some(el => el === dependence)

  targetDependencies.forEach(dependence => {
    if (!isContains(dependence)) {
      rewriteFiles(dependence)

      addDependence(dependence)
    }
  })
}

module.exports = updateDependencies
