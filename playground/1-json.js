const fs = require('fs')

// ### STORING DATA WITH JSON
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// converting JSON obj -> string
const bookJSON = JSON.stringify(book)
// converting string -> JSON obj
const parsedData = JSON.parse(bookJSON)

// create json file
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')  // buffer form
const dataStr = dataBuffer.toString()              // string form
const data = JSON.parse(dataStr)                   // JSON object form
console.log('TITLE: ' + data.title + '\nAUTHOR: ' + data.author)

// playing around with example JSON data
const exampleBuffer = fs.readFileSync('data.json')
const exampleStr = exampleBuffer.toString()
const example = JSON.parse(exampleStr)

example.name = 'Brian'      // updating name
example.age = 26+1          // updating age
example.planet = 'Mars'     // updating planet

const exampleUpdate = JSON.stringify(example)   // convert JSON back to string
fs.writeFileSync('data.json', exampleUpdate)    // write string to file
console.log(exampleUpdate)