import {data} from './data.js'

const rockPaperScissorsResults = (array) => {
    let data = array.split("\n")
    let results = []
    for(let i = 0; i < data.length; i++){
        let round = data[i].split("")
        round.splice(1,1)
        let a
        let b
        let c
        switch(round[0]) {
            case "A" :
                a = 1
                break;
            case "B" :
                a = 2
                break;
            case "C" :
                a = 3
                break;
        }
        switch (round[1]){
            case "X":
                b = 1
                break;
            case "Y":
                b = 2
                break;
            case "Z":
                b = 3
                break;
        }
        if(a === 1) {
            b === 1 ? c = 3 : b === 2 ? c = 4 : c = 8
        }
        if(a === 2) {
            b === 1 ? c = 1 : b === 2 ? c = 5 : c = 9
        }
        if(a === 3){
            b === 1 ? c = 2 : b === 2 ? c = 6 : c = 7
        }

        results.push(c)
    }
    let total = 0
    for(const value of results){
        total += value
    }
    console.log(total)
}

rockPaperScissorsResults(data)