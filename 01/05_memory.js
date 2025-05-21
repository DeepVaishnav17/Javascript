// stack - all primitve data types
// heap - all non primitive data types
let k  = 12;
let n = k
n = 13
//it store the value in stack so
//no chnage in memory
console.log(k)//12
console.log(n)//13

let obj = {
    key : "value",
    key2 : 12
}
let obj2 = obj
obj2.key = "new value"
console.log(obj) //updated value 
//because obj and obj2 will store in stack but there 
//address will store in heap and receives common address
// for both.

