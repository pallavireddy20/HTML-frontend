class Water_Bottle{
  
    constructor(a,b,c){
   this.type = a
   this.color = b
   this.capacity = c
 }
    fill(){
        console.log("fill the Water Bottle")
        console.log(`$(this.type)`)
    }
    unfill(){
        console.log("unfill the Water Bottle")
    }
}

var Mywaterbottle = new  Water_Bottle("water","blue","500ml")
Mywaterbottle.fill()

// bind method

//const a = {
   // name: "pallavi",
   // age: 20,
  //  display: function(){
   // }  
//}

//var myFunc = function(x){
 //   console.log(a.display()+` and his salary is ${x}`)
//}
 //var xyz = myFunc.bind(a,1000)
 xyz()

 //call method

 function abc(){
    console.log("hello iam pallavi")
 }
 abc()
 abc.call()

 //apply method
 function abc(){
    console.log("hello iam pallavi")
 }
 abc()
 abc.apply()
 const b = {value: 1}

 function xyz(a,b,c){
    console.log(this.value +` ${a} + ${b} = ${c}`)
 }
 xyz.apply(b,[1,2,3])
//prototyes
 class Demo{
   constructor(a,b){
      this.name = a
      this.age = b
   }
   display(){
      console.log(`${this.a} and ${this.b}`)
   }
   //remove_duplicate()
 }
 var myDemo = new Demo("pallavi",20)
 Demo.prototype.remove_duplicate = function(){
 
   for(let i=0;i<this.myarray.length;i++)
   {
      if(this.myarray[i] == this.myarray[i+1])
      {
         this.myarray.splice(i,1)
      }
   }
   console.log(this.myarray)
 }
 var Myarray = new Array()
 Myarray.push(1)
  Myarray.push(2)
   Myarray.push(2)
    Myarray.push(3)
     Myarray.push(4) 
     Myarray.push(4)
      Myarray.push(5)
console.log(Myarray)
Myarray.sort()
Demo.prototype.myarray =  Myarray
 

 myDemo.display()
myDemo.remove_duplicate()

