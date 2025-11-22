// var to let 
var browsername="Chrome"
function getBrowserName()
{
    let browsername="Firefox"
    if(browsername==="Chrome")
{
console.log("The browser name was(inside if block): ", browsername, typeof browsername);
}
console.log("The browser name was(outside if block): ", browsername, typeof browsername);
}
getBrowserName();
//var to const
var browsername="Chrome"
function getBrowserName()
{
    const browsername="Firefox"
    if(browsername==="Chrome")
{
console.log("The browser name was(inside if block): ", browsername, typeof browsername);
}
console.log("The browser name was(outside if block): ", browsername, typeof browsername);
}
getBrowserName();
//const to var
const browsername1="Chrome"
function getBrowserName()
{
    var browsername1="Firefox"
    if(browsername1==="Chrome")
{
console.log("The browser name was(inside if block): ", browsername1, typeof browsername1);
}
console.log("The browser name was(outside if block): ", browsername1, typeof browsername1);
}
getBrowserName();
//let to var
let browsername2="Chrome"
function getBrowserName()
{
    var browsername2="Firefox"
    if(browsername2==="Chrome")
{
console.log("The browser name was(inside if block): ", browsername2, typeof browsername2);
}
console.log("The browser name was(outside if block): ", browsername2, typeof browsername2);
}
getBrowserName();