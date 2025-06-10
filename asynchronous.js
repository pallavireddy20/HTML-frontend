function abc(){
    var a = fetch('https://jsonplaceholder.typicode.com/users')
    console.log(JSON.stringify(a))
    console.log("hello")
}
abc()
//call back
function abc(){
return 5
}

function def(a){
console.log(a)
}
def(abc()) 

function abc(){
    let a = {
        x: "india",
        y: "country"
    }
    return a
}

function def(z){
    console.log(z.x+" is a "+z.y)
}
def(abc()) 

// set time out

//setTimeout(
//    function(){
//    console.log("hello")
//}
//,
//3000)

//setInterval(
//    function(){
//    console.log("hello")
//}
//,
//3000)



//function myadd()
//{
 // var a = 10
 // var b = 10
 // var c = a+b
 // console.log(c)
//}
//var myId = setTimeout(myadd,3000)

//clearTimeout(myId,4000)

