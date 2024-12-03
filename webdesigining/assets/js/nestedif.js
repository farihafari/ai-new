let uemail = prompt("enter your email");
let upassword = prompt("enter your password");
let email ="ali@gmail.com";
let  password = "1234";
if(email && password){
    if(uemail==email){
        if(upassword==password){

        alert("user logged in successfully");
        }
        
        else{
            alert("wrong password");
        }

    }else{
        alert("user not found");
    }
}else{
    alert("please enter your email and password");
}