let i =0;
do{
    i = prompt("enter your pinCode");

    if(i){
        if(i!="F16"){
            alert("incorrect pincode");
        }
    }else{
        alert("required to fill");
        
    }
    
    
    
    //   document.getElementById('demo').innerHTML+= `<p>${i}</p>`;  
    }while(i!="F16")
         document.getElementById('demo').innerHTML+= `<h1>correct pincode</h1>`;
