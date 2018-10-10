const say = require('say')

say.speak('Hello Alex')

say.stop()

say.speak("Hello?", 'Alex', 0.5)

function sorryDave(expression, who) 
{
  alert("I'm sorry Dave");
}

setTimeout(sorryDave(), 5000); 

