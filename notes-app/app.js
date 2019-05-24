const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')

console.log(getNotes())

console.log(validator.isURL('uolbr'))
console.log(validator.isURL('uol.com.br'))


console.log(chalk.bgGreen('Success'))

