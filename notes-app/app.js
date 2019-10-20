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
