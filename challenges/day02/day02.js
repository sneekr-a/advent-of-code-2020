const fs = require('fs');

function passwordCheck (data) {
    data = data.split('\n');
    data.splice(data.length-1);

    let accum = 0;
    let accum2 = 0;

    for(var i = 0; i < data.length; i++){

        var count = 0;
        //this could be a regex
        //also adds a mystery empty element to the final result at index 3
        const pwordData = data[i].split('-').join(',')
                        .split(':').join(',').split(' ')
                        .join(',').split(',');
        const pword = pwordData[4];
        const char = pwordData[2];
        const upper = Number.parseInt(pwordData[1]);
        const lower = Number.parseInt(pwordData[0]);

        for(var j = 0; j < pword.length; j++){
            if(pword[j] == char){
                count++;
            }
        }

        if(count <= upper && count >= lower){
            accum++;
        }
        
        if( (pword[upper-1] == char || pword[lower-1] == char) &&
            !(pword[upper-1] == char && pword[lower-1] == char) ) {
            accum2++;
        }

    }

    return {'part1':accum, 'part2':accum2};

}

const data = fs.readFileSync('./input.txt').toString();
console.log(passwordCheck(data));