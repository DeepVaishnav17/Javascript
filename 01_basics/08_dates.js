let myDate = new Date()
console.log(myDate.toString())// Fri May 23 2025 07:15:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())// Fri May 23 2025
console.log(myDate.toLocaleString())// 5/23/2025, 7:16:24 AM
console.log(typeof Date)// function

//year, month, date, hour, mins, seconds
let mycreatedDate = new Date(2023,0,23, 5, 3)// month start from 0 in js
console.log(mycreatedDate.toLocaleString())

let newDate = new Date("2023-04-13")// yyyy-mm-dd
console.log(newDate.toLocaleString())

