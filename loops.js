// for loop 
 for(let a = 0; a<=10; a++)
{
   // console.log("hello")
}

//while loop
while(1)
{
    console.log("hello")
    break
}
var x = 0
while(x<10)
{
    console.log("pallavi")
    x++
}

//do while loop
var i = 1
do{
    console.log("i")
    i++
}while(i<10)  //2<10

// nested  for loop
for(let i=0; i<6; i++)
{
    for(let j=0; j<6; j++)
    {
        console.log("i")
        console.log("j")
    }
}

//nested while loop

while(1)
{
    console.log("outer while loop")
    var i = 10
    while(i>0)
    {
        console.log("inner while loop: " + i)
        i--
    }

    break
}