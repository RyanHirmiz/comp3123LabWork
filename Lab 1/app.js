var dateFormat = require("dateformat");

const formattedDate = new Date();

formattedDate;

function getCurrentDateAndTime()
{
    a = dateFormat(Date.now(), "yyyy-mm-dd");
    b = dateFormat(Date.now(), "hh:MM:ss");
    return ("Current Date: " + a + " Current Time: " + b);
}


function greet()
{
    for (i = 0; i < 9; i++)
    console.log(getCurrentDateAndTime());
    
}

greet();


var moment = require('moment');

var greet = function()
{
    var m1 = moment().format("YYYY-MM-DD");                
    var m2 = moment().format("hh:mm:ss");              
    console.log("Current Date: " + m1 + " Current Time: " + m2);

}

greet();