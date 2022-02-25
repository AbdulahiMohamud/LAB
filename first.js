
function userNameInput(){
    let userName = prompt("Enter thy Name !");
    if (userName == "abdulahi"){
        alert("Welcome master !");
    }else{
        
        document.write("Welcome, " +userName + " to space.");
    }
}

function showImage(){

    var userImgResponce = prompt("DO YOU WANT TO BE ENLIGHTENED WITH A PIC?");
    let spaceImg = "https://spaceholder.cc/200x200"

    if(userImgResponce.toLowerCase() == "yes"){
        document.write('<img src="' + spaceImg + '">');
    }
    if (userImgResponce.toLowerCase() == "no"){
         let lastChance = prompt("LAST CHANCE");
         
         if (lastChance.toLowerCase() == "yes"){
             document.write('<img src="' + spaceImg + '">');  
    }   else {
        alert("YOU WILL REGRET IT!!!");
        } 
        
    }
    
}

function displayRating() {

    var output = "";
    var userRating = prompt("ADD STARS TO THE SKY ");
    
    for (let i = 0; i < userRating; i++) {

        output += "🌟"

    }

    document.write(output);
}

function guessingGame() {
    let userGuess = prompt("Enter a number between 1 & 10");
    let rightAnswer = 7;
    let tries = 3;

    for (i = 0; i < tries; i++) {
        while (userGuess < 1 || userGuess > 10) {
            userGuess = prompt("Please enter a number between 1 & 10");
        }
        if (userGuess == rightAnswer) {
            alert = alert("WINNER WINNER CHICKEN DINNER (unless ur vegan)");
            document.write("CHAMP");
            break;
        }   else if (userGuess < rightAnswer) {
            userGuess = prompt("WRONG THE NUMBER IS HIGHER");
        }   else if (userGuess > rightAnswer) {
            userGuess = prompt("WRONG THE NUMBER IS LOWER");
        }
        if (i == 2) {
            alert("HA,HA THE NUMBER WAS " + rightAnswer);
            document.write("LOSER");
        }
    }
}
