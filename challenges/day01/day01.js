/*
Before you leave, the Elves in accounting just need
you to fix your expense report (your puzzle input);
apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
*/

const dataToInt = require('../modules/datatoint.js')

const data = dataToInt();

// Different approaches.
// Approach one - Evaluate all combinations
// Time consuming o(n^2) but works for this size of data.
// May revisit this. Horribly inefficient but I want to work on the harder problems sooner.
function solution1 (data) {

    for (var i = 0; i < data.length-1; i++) {

        for (var j = i+1; j < data.length; j++) {

            if(data[i] + data[j] == 2020){
                return data[i] * data[j];
            }

        }

    }

    return -1;

}

function solution2 (data) {

    for(var i = 0; i < data.length-2; i++){

        for(var j = i+1; j < data.length-1; j++){

            for(var k = j+1; k < data.length; k++){
                
                if(data[i] + data[j] + data[k] == 2020){
                    return data[i] * data[j] * data[k];
                }

            }

        }

    }

    return -1;

}

console.log('Size of data: ', data.length);

console.time('Solution 1 performance');
console.log('Solution Part 1: ' + solution1(data));
console.timeEnd('Solution 1 performance');

console.time('Solution 2 performance');
console.log("Solution Part 2: " + solution2(data));
console.timeEnd('Solution 2 performance');