function LOCALSTORAGE(){
    let obj ={
        name:"ali",
        email:"ali@gmail.com"
    }
localStorage.setItem("data",JSON.stringify(obj));
let x = JSON.parse(localStorage.getItem("data"));
console.log(x)
console.log(obj.name)
}
function SESSIONSTORAGE(){
    sessionStorage.setItem("name","ali session");
}
