var handleCounter = function (result)
{
    console.log('The callback count is' + result);
}

var callbackLoop = function(a, b)
{
    for (var i=1; i <= a; i++)
    {
        console.log(handleCounter(a))
        

    }
    console.log("Exiting callback loop");
}

callbackLoop(5, handleCounter)
