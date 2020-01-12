    // define characters
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numChar = "0123456789";

    // define ids
    var charLength = document.getElementById("charLength");
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var spec = document.getElementById("spec");
    var num = document.getElementById("num");
    var btn = document.getElementById("generate");
    var passwordDisplay = document.getElementById("display");
    var plength;
    var passwordCharSet;
    var userPassword;

// function with for loop and alert
function generate(){
    
    userPassword = "";
    passwordCharSet = "";

    plength = Number(charLength.value);

    if (upper.checked){
        passwordCharSet += upperChar;
    }
    if (lower.checked){
        passwordCharSet += lowerChar;
    }
    if (spec.checked){
        passwordCharSet += specChar;
    }
    if (num.checked){
        passwordCharSet += numChar;
    }

    for (var i=0; i < plength; i++){
        userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
    }
    
    if (userPassword === "") {
        var alertbox = document.getElementById("alert");
        alertbox.innerHTML ="Please complete both fields before generating!"
    } else{
        passwordDisplay.value = userPassword;
    }
}
// add event listener
document.getElementById("generate").addEventListener("click", generate);

// copy to clipboard
function copy(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard.");
}