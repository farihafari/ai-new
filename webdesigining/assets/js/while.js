let inital = prompt("enter initial number to start loop");
let final  = prompt("enter terminatin value of loof");

let d=document.getElementById("data");

if(inital && final){
    if(!isNaN(inital && final)){
       if(final>inital){
while(inital<=final){
d.innerHTML+=`<p>your loop iteration count is ${inital}</p>`;
    inital++;
}
       }else{
        alert("termination value must be greater then initial");
        location.assign("while.html")
       }
    }else{
        alert("input must be in number format");
        location.assign("while.html")
    }
}else{
    alert("every field is required to fill");
    location.assign("while.html")
}
