const calculator = require('./calculator');
const comparer = require('./comparer');



function test(a, b){
if (comparer.AreNumberEqual(a, b)){
     console.log("numbers are equal")
     calculator.Add(a, b);
}else{
    console.log("numbers are not equal")
    calculator.Subtract(a, b);
}
}


test(5, 10);
test(5, 5);
