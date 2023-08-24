// Code your solutions in this file
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function writeCards(writeCards) {
    for (let i = 0; i < writeCards.length; i++) {
        writeCards[0] = "Thank you, Guadalupe, for the wonderful surprise gift!";
        writeCards[1] = "Thank you, Ollie, for the wonderful surprise gift!";
        writeCards[2] = "Thank you, Aki, for the wonderful surprise gift!";
        return writeCards;
        debugger;
    }
}

function countDown(number)
{
    
        while (number >= 0) {
            console.log(number);
            number--;
        }
    

   
}

countDown(10);