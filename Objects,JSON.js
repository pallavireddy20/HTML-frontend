var a = {name:"pallavi",age:34}
console.log(a)

var b = new Object()
b.name = "pallavi"
//b.age = 34
console.log(b)

console.log(b.name)
console.log(b['name'])
 var myObject = {
    name: {
        firstname:"pallavi",
        lastname: "reddy"
    },
    age:20,
    salary:1000,
    skillset:["c","c++","java"],
    permanentemployee:true,
    location:{
        streetaddress: "water",
        buildingname: "mg road",
        mainroad:3
    },
    city: "bangalore",
    state:"karnataka"
}
console.log(myObject)

//sets
//array to set
 var a = ['apple','banana','custard']
 var b = new Set(a)
 console.log(b)
 //Hack - String
 var c = '{2,4,7}'
 console.log(c)

 //new set
 var x = new Set()
 x.add('delhi')
 x.add('bombay')
 x.add('kolkata')
 x.add('chennai')
 console.log(x)
 console.log(x.size) //number
 console.log(x.has('Bangalore')) //boolean

 
 //set to array
 var myarr = Array.from(x)
 console.log(myarr)
 
 x.clear()
 console.log(x)
 x.delete()
 console.log(x)

 //Map
 var a = new Map()
 a.set('name','pallavi')
  a.set('age',20)
   a.set('salary',1000)
   console.log(a)
console.log(a.has('name'))
console.log(a.values())
 console.log(a.keys())
 console.log(a.get('age'))
 console.log(a.size)

//map into array
var x = Array.from(a)
console.log(x)


//JSON
 var x = JSON.stringify(myObject) // conerting the JS object into JSON object
console.log(x)
 //console.log(myObject)
 var myjsonObject = {
    "name": {
     "firstname":"pallavi",
        "lastname": "reddy"
    },
    "age":20,
"salary":1000,
   "skillset":["c","c++","java"],
    "permanentemployee":true,
   "location":{
        "streetaddress": "water",
        "buildingname": "mg road",
        "mainroad":3
  },
    "city": "bangalore",
    "state":"karnataka"
}
 var y = JSON.parse(x)
 console.log(y)