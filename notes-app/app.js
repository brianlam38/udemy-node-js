// 3.8: Node.js core modules
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
fs.appendFileSync('notes.txt', '\nBrian is awesome.')

// 3.9: Importing local files
const add = require('./src/utils.js')
const sum = add(4, -2)
console.log(sum)

const getNotes = require('./src/notes.js')
const message = getNotes()
console.log(message)

// 4.0: Importing npm modules
const validator = require('validator')
console.log(validator.isEmail('brian@lol.com')) // valid email
console.log(validator.isEmail('brianlol.com'))  // invalid email
console.log(validator.isURL('https://brianl.me'))

const chalk = require('chalk')
console.log(chalk.green('This is green text.'))