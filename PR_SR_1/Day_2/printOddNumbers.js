let number;
function printOdd(number){
    if(number % 2 !== 0){
        console.log("The number", number, "is ODD");
        while(number>0)
            {number--;
        printOdd(number);
            }
    }
}
printOdd(20);
printOdd(0);
printOdd(1);
