let output = document.getElementById("calc")

function display(num) {
    output.value += num;
}

function Clear (){
    output.value="";
}
function Delete() {
    output.value = output.value.slice(0, -1);
}

function calc() {
    try {
        output.value = eval(output.value);
    }
    catch (err) {
        output.value = "Error"
    }
}














































/*var btn = document.getElementsByClassName("center");
var paro = document.querySelector("#po");
//let resulta = document.querySelector("#po").ariaValueText;
var numbers=5
var number= 7
paro.valueOf(5)

 btn[15].onclick=function(){ paro.innerHTML-= "0"; };

 //btn[14].onclick=function(){ paro.innerHTML+= resulta; };

btn[0].onclick=() => { paro.innerHTML += "1"; };
btn[1].onclick=() => { paro.innerHTML += "2"; };
btn[2].onclick=() => { paro.innerHTML += "3"; };
btn[4].onclick=() => { paro.innerHTML += "4"; };
btn[5].onclick=() => { paro.innerHTML += "5"; };
btn[6].onclick=() => { paro.innerHTML += "6"; };
btn[8].onclick=() => { paro.innerHTML += "7"; };
btn[9].onclick=() => { paro.innerHTML += "8"; };
btn[10].onclick=() => { paro.innerHTML += "9"; };

btn[11].onclick=function(){ paro.innerHTML+= "-"; };
btn[12].onclick=function(){ paro.innerHTML+= "*"; };
btn[13].onclick=function(){ paro.innerHTML+= "/"; };
btn[3].onclick=function(){ paro.innerHTML= ""; };
btn[7].onclick=function(){ paro.innerHTML+= "+" };*/


