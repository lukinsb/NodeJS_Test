const fs = require('fs')
const chalk = require('chalk')

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

const removeNote = (title) => {
    
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)
 

   if (notesToKeep.length === notes.length){
       console.log(chalk.red("There is no note to be removed!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green("Note Removed!"))
    }
        

}

const listNotes = () => {

    console.log(chalk.bgBlue('Your Notes \n'))
    let count = 1 
    const notes = loadNotes()
    notes.forEach((note) => {
    console.log(count + '. ' + note.title)
    count ++
    })
      

}

const readNote = (title) => {

    
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title === title)

    if (noteToKeep.length === 1){
        console.log(chalk.bgBlue('Showing Note \n'))
        console.log("Title: " + noteToKeep[Object.keys(noteToKeep)[0]].title)  
        console.log("Body: " + noteToKeep[Object.keys(noteToKeep)[0]].body)
    } else {
        console.log(chalk.bgRed('There is no note with this title!\n'))
        listNotes()
    }
}
      
module.exports = {
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
