let numbers = prompt('Ведите числа масива через пробел','')

let numbersArr = numbers.split(' ')

let sum = 0

let numbersMin = Math.min(...numbersArr)
let numbersMax = Math.max(...numbersArr)

numbersArr.forEach(num => sum += num * 1)

alert(`
    Масив: [${numbersArr}]
    Сума: ${sum}
    Минимум: ${numbersMin} 
    Максимум: ${numbersMax}
`)
