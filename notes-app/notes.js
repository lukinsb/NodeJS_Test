const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){

let note = "Your notes..."

return note

}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
            saveNotes(notes)
            console.log(chalk.green('New note added!'))
    }else{
        console.log(chalk.red('Note Title taken!'))
    }       
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
  
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
 
}

const removeNote = function(title){
    
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)
 

   if (notesToKeep.length === notes.length){
       console.log(chalk.red("There is no note to be removed!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green("Note Removed!"))
    }
        

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
}
