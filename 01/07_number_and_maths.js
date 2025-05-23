const score = 400
console.log(score)

const number = new Number(100)
console.log(number)

console.log(number.toString().length) //3 
console.log(score.toString().length)

const otherNymber = 1123.89489
console.log(otherNymber.toFixed(3))// follwos rule of round off and round of after floating point

console.log(otherNymber.toPrecision(1))// it means 1 means after . no one should there, if it's 2 then after decimal 1 number should there

//////////+++++++maths++++++++++\\\\\\\\\\\\\
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.floor(4.2))
console.log(Math.ceil(4.2))
console.log(Math.min(4,2,3,4))

console.log(Math.random())// alwayse 0 to 1
console.log( Math.floor((Math.random()*10) + 1)) //It can give you 0 so to avoid it we should add 1

const max = 10
const min = 20
console.log( Math.floor(  Math.random()*(max-min+1) ) + min) // we have to give range max-min+1 but it will like upper so to define from min to max add min