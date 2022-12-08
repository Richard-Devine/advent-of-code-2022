import {data} from './data.js'

const buildLowercaseLetters = () => {
    let lowerLetters = {}
    let upperLetters = {}
    let l = 97
    let u = 65
    for(let i = 0; i < 26; i ++){
        lowerLetters[String.fromCharCode(l)] = i + 1
        upperLetters[String.fromCharCode(u)] = i + 27
        l++
        u++
    }
    return {...lowerLetters,...upperLetters}
}

let letters = buildLowercaseLetters()

let strings = data.split("\n")
let matchingLetterArray = []
let groupArray = []
let elfGroup = {}
let i = 1
strings.map((string) => {
    elfGroup[i] = string.split("")
    if(i === 3) {
        groupArray.push(elfGroup)
        i = 0
        elfGroup = {}
    }
    i++
})
console.log(groupArray)
groupArray.map((group) => {
    console.log(group)
    for(const letter of group[i]){
        if(group[i+1].includes(letter) && group[i+2].includes(letter)){
            matchingLetterArray.push(letter)
            break;
        }
    }
})
console.log(matchingLetterArray)

let total = 0
for(const item of matchingLetterArray){
    total += letters[item]
}
console.log(total)


