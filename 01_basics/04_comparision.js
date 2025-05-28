// >, >=, <=, <, !=, ==
console.log("2">1); //true
console.log("02">1) // true

//avoid this type of conversion
console.log(null >= 0)// true
console.log(null > 0) // false
console.log(null<=0)// true
console.log(null==0)// false
console.log(null>0)// false

//for undefined alwayse false
console.log(undefined >= 0)// false
console.log(undefined > 0) // false
console.log(undefined <= 0)// false
console.log(undefined == 0)// false
console.log(undefined > 0)// false
 

//strict check
console.log("2"==2) // true
console.log("2"===2) //false


//summary datatypes:
//primitive: pass by value
    // string
    // number
    // boolean
    // null
    // undefined
    // symbole
    // big int


//non primitve: refernece : call by address
    // Arrays
    // Objects
    // Functions

// Javascript has no need of declare datatype so it is dyamically type language
// Typescript is statically type language

// constructor init
let k = Number(23);

const heros = ["deep","peep","meep"]
let myobj = {
    name : "",
    age: 23
}
const obj = function () {
    console.log("deep")
}

// String : type of string
// Number : type of number 
// BigInt : type of Bigint
// Boolean : type of boolean
// Null : type of object *
// Undefined : type of undefined 
// Symbol : type of Symbol

// reference data type 
// ==================
// array , object , function 
// only fn type of function and other object 
