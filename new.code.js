//This function connects to the spin button and initiate the function.
function play() {
    var die1 = Math.ceil(Math.random() * 6);//This does the math for the dice 1 roll.
    var die2 = Math.ceil(Math.random() * 6);//This does the math for the dice 2 roll.

    var sum = die1 + die2;//Tells what the sum equals when the dice 1 and dice 2 is added.

    document.getElementById("diceRoll1").innerHTML = "Dice 1 = " + die1;
    /*The document write gets the id from the html page and connects it
     with the java then produces the information for the viewer can see
     and that goes for the next two documents write*/
    document.getElementById("diceRoll2").innerHTML = "Die 2 = " + die2;
    document.getElementById("rollResults").innerHTML = "Outcome = " + sum;
    
    if (sum == 7 || sum == 11 ) {
/*This tells the browser if the sum equals 7 or 11 you craps out and to write it out 
so the viewer can see it*/
        document.getElementById("lets see").innerHTML = "Craps-You-lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
/*This also does the same thing.. Tells the browser if the dice is doubles to write
you win*/
        document.getElementById("lets see").innerHTML = "you win"; 
    }


}