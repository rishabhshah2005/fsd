function askYesNo(){
    ans = prompt("Kya tumhari behen bolti hai??")
    if (ans=="yes"){
        document.getElementById("answer").innerHTML = "Hallelujah!!!!";
    }
    else{
        document.getElementById("answer").innerHTML = "Not possible!!";
    }
}