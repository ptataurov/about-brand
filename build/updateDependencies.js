const {
  writeFileSync,
  writeSync,
  readFileSync,
  openSync,
  close
} = require('fs')
const dirs = require('./dirs')
const resetDependencies = require('./resetDependencies.js')

const updateDependencies = (isPage, targetName) => {
  resetDependencies(isPage, targetName)

  const targetPath = isPage ? dirs.pages : dirs.components
  const dependenciesPath = `${dirs.src}/globalDependencies.json`

  const targetDependencies = JSON.parse(
    readFileSync(`${targetPath}/${targetName}/dependencies.json`)
  ).reverse()

  const globalDependencies = JSON.parse(readFileSync(dependenciesPath))

  const addDependence = dependence => {
    globalDependencies[isPage ? 'pages' : 'components'][targetName].unshift(
      dependence
    )

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
      const str = map[key]
      const file = `${targetPath}/${targetName}/_imports/import.${key}`
      const data = readFileSync(file)
      const fd = openSync(file, 'w+')

      writeSync(fd, str, 0, str.length, 0)
      writeSync(fd, data, 0, data.length, str.length)

      close(fd, () => {})
    }
  }

  const isIncluded = dependence =>
    globalDependencies[isPage ? 'pages' : 'components'][targetName].some(
      el => el === dependence
    )

  targetDependencies.forEach(dependence => {
    if (!isIncluded(dependence)) {
      rewriteFiles(dependence)

      addDependence(dependence)
    }
  })
}

if (process.argv[2]) {
  const isPage = process.argv[2] === 'page'
  const targetName = process.argv[3]

  updateDependencies(isPage, targetName)
}

module.exports = updateDependencies
