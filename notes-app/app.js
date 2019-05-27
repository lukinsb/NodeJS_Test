const notes = require('./notes.js')
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
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({

    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
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