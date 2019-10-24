const fs = require('fs')

// ### STORING DATA WITH JSON
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// converting JSON obj -> string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
// converting string -> JSON obj
const parsedData = JSON.parse(bookJSON)
console.log(parsedData)
console.log(parsedData.title)

// create json file
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')   // buffer form
console.log(dataBuffer)
const dataStr = dataBuffer.toString()              // string form
console.log(dataStr)
const data = JSON.parse(dataStr)                   // JSON object form
console.log(data)
console.log('TITLE: ' + data.title + '\nAUTHOR: ' + data.author)

// playing around with example JSON data
const exampleBuffer = fs.readFileSync('data.json')
const exampleStr = exampleBuffer.toString()
const example = JSON.parse(exampleStr)

example.name = 'Brian'
example.age = 26
console.log(example)

const exampleUpdate = JSON.stringify(example)
fs.writeFileSync('data.json', exampleUpdate)