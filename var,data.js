//variables

/*var a = 1
// a ia having the address of the memory where 1 is stored
console.log(a)

let b = 2
console.log(b)

const c = 3 
console.log(c)


//data types
var a = 1
console.log(typeof(a))

var b = "india"
console.log(typeof(b))

var c = true
console.log(typeof(c))

var d
console.log(typeof(d))  //undefined

var e = null*/

// type conversion
var a = 1
String(a)
var b = String(a)
console.log(b)
console.log(typeof(b))
  

let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324^(e-1)')
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0