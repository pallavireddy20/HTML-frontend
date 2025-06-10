//E5 concepts

// strict method
'use Strict'
function abc(){
    a = 1
}
abc()

//multi line string
var a = "p\
a\
l\
l\
a\
v\
i"
console.log(a)

//string methods
//trim method
var a = "    pallavi    "
console.log(a.trim())

//array methods
var a = [1,2,3,4,5]

//foreach ,foreverything
console.log(a.forEach((value)=>{console.log(value)})) //value === item from the array

a.forEach(
    function(item,index){
        console.log(item)
        console.log(index)
    }
)

var a = [1,2,3,3,4,2,5,2]
//indexof
console.log(a.indexOf(2) ) //it will give you the index number of the item which was encountered first
console.log(a.lastIndexOf(2))

//some method
var a = [5,10,15,20,25,30]
console.log(a.some((item)=>{return item>40}))
//or
var x = a.some((item)=>{return item<20})
console.log(x)
//some will return a boolean value

//every method
var a = [5,10,15,20,25,30]
var x = a.some((item)=>{return item>40})
console.log(x)

//is array
var a = [1,2,3,4]
console.log(Array.isArray(a))

//JSON methods
//stringify => JS Object to JSON Object
// parse => JSON Object to JS Objects


//E6 concepts

//arrow functions
function abc(){
    console.log("hello")
}
abc = () => console.log("hello")

//string methods
var a = "Hey Pallavi"
console.log(a.startsWith("H"))
console.log(a.endsWith("."))
console.log(a.includes("P"))

//array methods
//from
var a = "pallavi"
console.log(Array.from(a))
//find
var a = [5,10,15,20,25,30]
console.log(a.find((value)=>{return value>20}))
//keys
var a = [5,10,15,20,25,30]
var b = a.keys() //[0,1,2,3,4,5,6] => array with index values of the given array
for(let z of b){
    console.log(z)
}

//spread operator
var a = [2,4,6,8,10,12,14,16,18,20]
console.log(...a)

var b = [{name:"pallavi",salary:500},{name:"pavithra",salary:550},{name:"pallavi reddy",salary:600}]
console.log(...b)

var x = [2,4,6,8,10,12,14,16,18,20]
var y = [3,6,9,12,15,18,21,24,27,30]
var z = [...x,...y]
console.log(z)

//template literals
var x = {
    name:"pallavi",
    salary:5000,
     age:20
}
var a = x.name
var b = x.salary
var c = x.age
var {m,n,o} = x
console.log(`${a} ${b} ${c}`)
console.log(`${m} ${n} ${o}`)
