
// Modules

const chalk = require('chalk')
const uuid = require('uuid')

// Code

interface User {
    index: number,
    age: number,
    text: string
}

function getUser(user: User) {
    return {
        index: user.index,
        age: user.age,
        text: user.text
    }
}

for (let i: number = 1; i <= Math.floor(Math.random() * 10); i++) {
    let obj = {
        index: Math.floor(Math.random() * 100),
        age: Math.floor(Math.random() * 80),
        text: uuid.v4()
    };
    console.log(getUser(obj));
}
