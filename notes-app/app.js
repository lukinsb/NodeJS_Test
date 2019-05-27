const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({

    command: 'add',
    describe: 'Add a new note',
    handler: function add() {
        console.log('Adding new note!')
        
    }
})
