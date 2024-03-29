const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes.js')

// add
yargs.version('1.1.0')
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
// remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function () {
        console.log('Removing a note!')
    }
})
// list
yargs.command({
    command: 'list',
    describe: 'List your notes!',
    handler: function () {
        console.log('Listing out all notes!')
    }
})

yargs.parse()

// ### 