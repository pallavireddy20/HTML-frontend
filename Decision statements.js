// if condition)

if(4>3)
{
    console.log("pallavi")
}

//if-else condition

if(4<3)
{
    console.log("pallavi")
}
else{
    console.log("reddy")
}

// ternary operator
(5>3)
?
console.log("pallavi")
:
console.log("reddy")




//if-else ladder

if(4<3)
{
    console.log("pallavi")
}
else if(4>3)
{
    console.log("reddy")
}
else 
{
    console.log("pathikonda")
}

//nested if
var a = 30
if(a<100)
{
    if(a>9)
    {
    console.log("The value is of 2 digits")
}
}

if(a <100 && a>9)
{
    console.log("The value is of 2 digits")
}

//switch statement

var a = 2
switch(a)
{
    case 0 : console.log("0")
    case 1 : console.log("1")
    case 2 : console.log("2")
    break
    case 3 : console.log("3")
}
 // example for swtich statement
 
let dayOfWeek = 5;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName); // Output: "Friday"


