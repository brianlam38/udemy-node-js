// ### NODE.JS CORE MODULES
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
fs.appendFileSync('notes.txt', '\nBrian is awesome.')

// ### IMPORTING LOCAL FILES
const add = require('./src/utils.js.js')
const sum = add(4, -2)
console.log(sum)

const getNotes = require('./src/notes.js.js')
const message = getNotes()
console.log(message)

// ### IMPORTING NPM MODULES
const validator = require('validator')
console.log(validator.isEmail('brian@lol.com')) // valid email
console.log(validator.isEmail('brianlol.com'))  // invalid email
console.log(validator.isURL('https://brianl.me'))

// ### PRINTING IN COLOUR
const chalk = require('chalk')
const greenMessage = chalk.green('This is a message.')
console.log(greenMessage)
const greenBoldMessage = chalk.bold(greenMessage)
console.log(greenBoldMessage)
const greenBoldUnderlineMessage = chalk.underline(greenBoldMessage)
console.log(greenBoldUnderlineMessage)

// You can install node modules globally using node install [module] -g
// ^Ideally shouldn't use this and keep environment within the repository

// ### FILE SYSTEM AND COMMAND LINE ARGUMENTS
const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}