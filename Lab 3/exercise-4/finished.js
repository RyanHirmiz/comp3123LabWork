var max = 50;

var handleCounter = function  (error, counter, waitTime, timestamp)

{
  if(error)
  {
    console.log("There's an error that occured!!!");
  }

  else
  {
    console.log(counter + waitTime + timestamp);
  }
}

var date = new date();
var hours = new hours();
var minutes = new minutes();
var seconds = new seconds();

var callBackWait = function(counter, callback)
{
  timestamp = hours + minutes + seconds;
  waitTime = Math.random() * (max - min) + min ;
}

for (let index = 0; index < 10; index++) 
{
  callBackWait(i,handleCounter);    
}

console.log(callBackWait);