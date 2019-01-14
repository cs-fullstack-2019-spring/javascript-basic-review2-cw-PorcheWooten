//Ask the user to enter a 4 digit code. 
// Ask the user to enter the password again. 
// If the passwords are the same print "Password is set." 
// If the passwords are different print "ERROR, Passwords are different."

var code1= parseInt(prompt("Enter a four digit code"));
var codeRetry= parseInt(prompt("ReEnter code"));

if(code1 === codeRetry)
{
    console.log("Password is set");
}
        
else if(code1 != codeRetry)
{
        console.log("ERROR");
    }
    
