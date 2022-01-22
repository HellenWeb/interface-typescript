// Modules
var chalk = require('chalk');
var uuid = require('uuid');
function getUser(user) {
    return {
        index: user.index,
        age: user.age,
        text: user.text
    };
}
for (var i = 1; i <= Math.floor(Math.random() * 100); i++) {
    var obj = {
        index: Math.floor(Math.random() * 100),
        age: Math.floor(Math.random() * 80),
        text: uuid.v4()
    };
    console.log(getUser(obj));
}
