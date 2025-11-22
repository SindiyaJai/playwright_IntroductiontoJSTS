//if esle example
let testName="";
function lauchBrowser(browserName)
{
if(browserName==="Chrome")
{
console.log("The browser name lauched is Chrome");  
}
else{
console.log("The browser name lauched is not Chrome");
}
}
lauchBrowser("Chrome");

//switch example
let testSuiteName=""
function runTest(testSuiteName)
{
    switch(testSuiteName)
    {
        case "Smoke":
        console.log("The test suite to be ran is SMOKE");
        break
        case "Regression":
        console.log("The test suite to be ran is REGRESSION");
        break;
        case "Sanity":
        console.log("The test suite to be ran is SANITY");  
        break;
        case "Functional":
        console.log("The test suite to be ran is FUNCTIONAL"); 
        break;
        case "Adhoc":
        console.log("The test suite to be ran is ADHOC"); 
        break;
        default:
        console.log("Default (SMOKE) test suite is matched");
        break;
    }
}
runTest("Smoke");
runTest("Regression");
runTest("Sanity");
runTest("Functional");
runTest("Adhoc");