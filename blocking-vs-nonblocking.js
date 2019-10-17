// I/O Blocking Example
const userOne = getUserSync(1)
console.log(userOne)

const userTwo = getUserSync(2)
console.log(userTwo)

const sum = 1 + 33
console.log(sum)

// I/O Non-Blocking Example
getUser(1, (user) => {
	console.log(user)
})

getUser(2, (user) => {
	console.log(user)
})

const sum = 1 + 33
console.log(sum)
