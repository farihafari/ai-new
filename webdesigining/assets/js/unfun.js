
function firstFun(){
let clr = document.querySelector("#color").value;
let uinput = document.querySelector("#name").value;
let data = document.querySelector("#prnt");
data.innerHTML=uinput;
data.style.color=clr;
}
// firstFun()