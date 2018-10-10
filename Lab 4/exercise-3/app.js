var calc = require('./calculator');

cal.addTwoNumbers("a", "b")
{
        console.log(cal.addTwoNumbers(2,2));
}

cal.subtractTwoNumbers("c", "d")
{
        console.log(cal.subtractTwoNumbers(2,2));
}

describe('Calculator', function()
{
    describe('when used synchrounously', function()
    {
            it('should add two numbers correctly', function()
            {
                    calc.addTwoNumbers(2, 2).should.equal(4);
            });
    })
    describe('when used synchrounously', function()
    {
            it('should subtract two numbers correctly', function()
            {
                    calc.subtractTwoNumbers(2, 2).should.equal(0);
            });
    })
});




