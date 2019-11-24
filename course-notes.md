# NodeJS Introduction

### Why use NodeJS
Javascript couldn't be used as a general purpose programming language - it was limited to what the browser allowed it to do, but not to build things like web servers that could access the file system and connect to databases (unlike other languages).

NodeJS is a way to run Javascript on the server as opposed to being forced to run it in a browser, the client.

NodeJS is largely written in C++.

### The V8 Javascript Engine

V8 is written in C++. It is used by Chrome/NodeJS to take in Javascript code, processes it and returns results back.

Both Chrome/Node use C++ to provide bindings when instantiating the V8 engine, allowing them to create their own JS runtime with interesting features.
- Allows Chrome to interact with the DOM when the DOM is not part of JS.
- Allows Node to interact with your filesystem when the FS is not part of of JS.
- V8 has no idea about how to interact with your FS, Javascript or the DOM. It is up to Chrome/Node to provide implementations for those when running V8.

Comparison:
```Javascript
// Javascript (Chrome)
localStorage.getItem
document.querySelector

// Javascript (Node.JS)
fs.readFile
os.platform
```

None of these methods are part of the Javascript programming language, but are provided to V8 as part of the Chrome or NodeJS runtime. Javascript doens't know how to read a file from disc, but C++ does. When someone uses JS code in NodeJS to read a file from disk, it just defers all of that to the C++ function that can actually read a file from disk and get the results back.

We have a series of methods which can be used in Javascript code, which in reality is just running C++ behind the scenes.

### Non-blocking I/O

NodeJS can continue to process other code while it is waiting for a response from another I/O operation.

For Chrome, if I/O was blocking, the browser would completely freeze up and the user would have to wait for data to be fetched before being able to do anything. Non-blocking I/O frees up the browser to allow the user to interact with the user-interface while I/O operations are running in the background. This also applies to NodeJS.

# File-System, Command Line Args and JSON

Command line arguments
```javascript
const command = process.argv[2]     // parse in args
```

File-System and JSON manipulation
```javascript
const fs = require('fs')

// initialise person object
const person = {
    name: 'Brian',
    age: 26,
    planet: 'Earth'
}

// create person.json file
const personStr = JSON.stringify(book)     // JSON -> str
const person = JSON.parse(personStr)       // str -> JSON
fs.writeFileSync('person.json', personStr) // write JSON file

// read person.json -> update file
const personBuffer = fs.readFileSync('person.json')
const personStr = personBuffer.toString()
const person = JSON.parse(personStr)
person.name = 'BrianLol'
person.age = 27
person.planet = 'Mars'
const personStr = JSON.stringify(person)
fs.writeFileSync('person.json', personStr)
```

