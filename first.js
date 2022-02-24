
function userNameInput (){
    var userName = prompt("Enter thy Name !");
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
    if (userImgResponce.toLowerCase() == "no"){
         let lastChance = prompt("LAST CHANCE");
        if (lastChance.toLowerCase() == "yes"){
            document.write('<img src="' + spaceImg + '">');  
    }   
    }else{
        alert("YOU WILL REGRET IT!!!");
    }
    
}