var express = require("express");
var app = express();

app.listen(3000);

app.get('/json', function(req, res)

{
    res.json({ firstname: 'John', lastname: 'Smith'});
})

app.get('./toronto+team', function (req, res)
{
    res.send('<htm><head></head><body><h1>Go Toronto!</h1></body></html');
});

app.get('./greet', function(req, res)
{
    console.log('GET recieved: ' + req.requestTime);
    res.send('hello world!');
})