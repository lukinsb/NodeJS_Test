const getNotes = require('./notes.js')
const chalk = require('chalk')       
const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

yargs.command({

    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})

yargs.command({

    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes!')
    }
})

yargs.command({

    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})


yargs.parse()
//console.log(yargs.argv)