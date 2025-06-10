//function myPa(){
  //  console.log("helo world")
//}
//myPa()
//

//function myMap(a,b){
   
//}
//myMap(3,5)

//unction mySub(a,b){
 //   return a-b
//}
 //var x = mySub(5,3)
 //console.log(x)

 //console.log(mySub(5,3))

 //function my(a){
    //console.log("my name is "+a)
 //}
 //my("pallavi")

 //function my(a,b,c){
    //console.log("my name is "+ a + "my age is "+ b +" and my salary is "+c)
    //console.log(`my name is ${a},my age is  ${b},and my salary is ${c}`)
//}
 //my("pallavi",20,1000)

 //var a = {
  //  name:"pallavi",
  //  age: 24,
  //  add: function(a,b){
  //      return a+b
  //  }
 //}
//consle.log(a.add(3,4))
//console.log(a['add'](3,4))


 // function add(a,b){
  //return a+b
//}
//add(3,4)

// helper function
 //function perimeter(radius)
 //{
 //   let a = 2*3.14*radius*radius
 //   return a
// }
 //var circle = perimeter(3)
 //console.log(circle)

 // call back function
 //function circle(a)
 //{
 //   console.log(a)
 //}
 //circle(perimeter(2))


 // function declaration
 //function abc(){
 //   console.log("india")
 //}
 //abc()

 //var a ={
  //  name: "pallavi",
  //  abc: function(){
  //      console.log("reddy")
  //  }
 //}
//a.abc()

//function abc(a = function(){ return 6})
//{
  //  console.log(`hello world - ${a}`)
//}


///function abc(a){
//    return a + 5
//}
//console.log(abc(2))

// in newer versions of JS we can use arroe function
//abc = a => a + 5
//console.log(abc(2))

//function a(){
//   console.log("hello")
//}
//a = () => console.log("hello")


// generator function
function* abc(){
    yield console.log("hello")
    yield console.log("india")
}
 var a = abc()
 console.log(a)

 for (let i of a)
 {
    console.log(i)
 }
 // immediately invoked functions
 (function(){
    console.log("india")
 })()
 // recursive function
 
 //factorial

 function a(b){
    if (b==0)
        return true
    return b * a(b-1)
} 
console.log(a(5))

// call stack

function a(){
   let x = 5
   let y = 5
   let z = x+y
   console.log(z)
   m=  z - 1
   console.log(m)
}
a()