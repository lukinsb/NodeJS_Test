const fs = require('fs')

/* const book = {

    title:'O código da Vinci',
    author: 'Dan Brown'

}



const bookJSON = JSON.stringify(book)


const parsedData = JSON.parse(bookJSON)

console.log(parsedData.author)

fs.writeFileSync('1-json.json',bookJSON) */

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.author)