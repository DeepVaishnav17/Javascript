let name = "deep"
let repo = "js"

//console.log("Hi my name is " + name + " This is repo of "+ repo) // this is outdated

console.log(`Hi everyone my name is ${name} and my repo is ${repo}`)// string intrepolation

const gameName = new String("deep") //as a object
// you can access all the method of string class just using name of object and . operator

const newName = gameName.substring(0,2)
console.log(newName)// index 0,1

const sliceeg = gameName.slice(-3,2)
console.log(sliceeg)

const trimeg = "            deep        "
console.log(trimeg.trim() + "deeo")// remove white space deepdeeo

const convert = "deep.peep.keep" // i want to make saprate it based on . 
console.log(convert.split('.'));


