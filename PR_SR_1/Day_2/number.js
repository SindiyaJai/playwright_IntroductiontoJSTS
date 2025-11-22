var number
var number1 = 12
var number2 = -13
var number3=0
function numberAnalyser(number)
{
if(number>0)
{
console.log("The number passed as parameter is POSITIVE");
}
if(number<0)
{
console.log("The number passed as parameter iS NEGATIVE");
}
if(number==0)
{
console.log("The number passed as parameter is ZERO");
}
}
numberAnalyser(number1);
numberAnalyser(number2);
numberAnalyser(number3);