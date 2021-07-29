const fs = require('fs')

function readData () {
    let data = fs.readFileSync('./input.txt').toString().split('\n');
    for (var i = 0; i < data.length; i++){
        data[i] = Number.parseInt(data[i], 10);
    }
    return data;
}

module.exports = readData;