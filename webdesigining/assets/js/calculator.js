function num(numbers){
    document.querySelector("#inp").value+=numbers;
}
function operators(op){
    document.querySelector("#inp").value+=op;
}
function calculation(){
    let reuslt  = eval(document.querySelector("#inp").value);
    document.querySelector("#inp").value = reuslt;
    
}