let  tb = document.getElementById("data");
let table=parseInt(prompt("enter the table value"));
let inital =parseInt(prompt("enter the number where the table start"));
let terminatin = parseInt(prompt("enter the number where the table start"));
let x ="";

if(table && inital && terminatin){
    if(!isNaN(table && inital && terminatin)){
        if(terminatin>inital){
            for( let i=inital;i<=terminatin;i++){
                // console.log(initial);
                x+=`<tr>
                            <td>${table}</td>
                            <td>X</td>
                            <td>${i}</td>
                            <td>=</td>
                            <td>${i*table}</td>
                        </tr>`
            }
            tb.innerHTML=x
        }else{
            alert("terminatin value must be greater to  initial value");
            location.assign('for.html')
        }
    }else{
        alert("value should be number");
        location.assign('for.html')

    }
}else{
    alert("all fields are required to fill");
    location.assign('for.html')

}
