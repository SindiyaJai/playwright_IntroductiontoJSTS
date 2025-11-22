if(true)
{
   var name="Sindi"
   console.log ("inside function",typeof name, name);
}

console.log ("outfside function",typeof name, name);

function varusage()
{
    var name="Sindiya"
    console.log("inside function",typeof name, name);
}
console.log("outside function",name);
function letusage()
{
    let a=345
    console.log("inside",a);
}
//console.log("outside=",a);
function constusage()
{
    const b=345
    console.log("inside",b);
}
//console.log("outside=",b);