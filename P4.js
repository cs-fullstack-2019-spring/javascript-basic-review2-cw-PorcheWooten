//Create a function that returns 5 more than the integer sent to it. 
// Assume the user only enters integers. 
// Create a different function that adds " is awesome" to any strings sent to it. 
// Challenge: If the wrong data type is sent to one of the functions print "ERROR".
//
var x = parseInt(prompt("Enter a number"));

function numbers(x)
{
    if (isNaN(x))
    {
        console.log("ERROR");
    }
    else if (!isNaN(x))
    {
        console.log(x * 5);
    }
}
numbers(x);


var string1 = prompt("Enter your name");

function addSomething()
{
    if (!isNaN(string1)) {
        console.log("ERROR")
    } else if (isNaN(string1)) {
        console.log(string1 + " " + "is awesome");
    }
}

addSomething();