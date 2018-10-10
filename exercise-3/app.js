var express = require("express");
var app = express();
var mongoose = require('mongoose');

mongoose.connect('');

var port = process.env.PORT || 3000;
app.listen(port);

mongoose.connect('mongodb://Ryan.Hirmiz:RyanH1994@ds229373.mlab.com:29373/local_library');

var Schema = mongoose.Schema;
var userSchema = new Schema ({name: String, status: String});

var User = mongoose.model('User', userSchema);

var john = User({name: 'John', status: 'active'});

john.save(function(err)
{
    if (err) throw err;
    console.long('***User saved!****');
});