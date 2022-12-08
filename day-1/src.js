import {data} from './data.js'

let calories = data.split("\n")
let elfMap = new Map()
let j = 1
for (let i = 0; i < calories.length; i++) {
    if (calories[i] === "") {
        j++
    } else {
        if (elfMap.has(j)) {
            elfMap.get(j).push(Number(calories[i]))
        } else {
            elfMap.set(j, [Number(calories[i])])
        }
    }
}
let mostCalories = []
elfMap.forEach((calories) => {
    let total = 0
    for (const calorie of calories) {
        total += calorie
    }
    if (mostCalories.length < 3) {
        mostCalories.push(total)

    } else {
        if (mostCalories[0] < total) mostCalories.splice(0, 1, total)
        mostCalories.sort((a, b) => a < b ? -1 : 1)
    }
})
console.log(mostCalories[0] + mostCalories[1] + mostCalories[2])

