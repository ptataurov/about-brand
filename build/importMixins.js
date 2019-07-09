const { appendFileSync } = require('fs')

const { getDirectoriesBasenames } = require('./utils.js')

const dirs = require('./dirs')

const componentNames = getDirectoriesBasenames(`${dirs.components}`)

componentNames.forEach(name => {
  appendFileSync(
    `${dirs.components}/${name}/_imports/import.js`,
    `
import '../${name}.scss'
`
  )
})
