const accountId = 1334 //can't change

let email = "1123@gmail.com"  // no scope problems

/* Prefered not to user var to prevent block scope and function scope*/ 
var password = "12345" // resolve scope no control over blocks(loops, if)

/** Not recommanded */
city = "JAIPUR"

let accountType; // undefined



// You can't change or reasign to const
// accountId = 2334
// console.log(accountId)


// lets and other are changable except const
email = "deep@gmail.com"
console.log(email)

console.table( [accountId, email, password, city, accountType]) // to see output in tabuler way


