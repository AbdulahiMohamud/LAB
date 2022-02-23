var userName = prompt("Enter thy Name !");
var userImgResponce = prompt("DO YOU WANT TO BE ENLIGHTENED WITH A PIC?");
let spaceImg = "https://spaceholder.cc/200x200"

if (userName == "abdulahi"){
    alert("Welcome master !");
}else{
    
    document.write("Welcome, " +userName + " to space.");
}
if(userImgResponce == "yes"){
    document.write('<img src="' + spaceImg + '">');
}else{
    alert("YOU WILL REGRET IT!!!")
}