let std_detail =[
    ['alishar','cpism','9 to 11',7600],
    ['aliya','cpism','9 to 11',7600,],
    ['alisha','cpism','9 to 11',7600],
    ['alisba','cpism','9 to 11',7600],
    ['aliyan','cpism','9 to 11',7600],
    ['ali raza','cpism','9 to 11',7600],
    ['ali hamaza','cpism','9 to 11',7600],
    ['alishar','cpism','9 to 11',7600],
    ['ali','cpism','9 to 11',7600],
    ['ali','cpism','9 to 11',7600]

];
let x ="";
// document.write(std_detail[2][0])
for(let i =0;i<std_detail.length;i++){
    let bgColor = i %2? 'green' : 'blue'
    x+=`<tr style="background-color: ${bgColor}">`
    for(let j=0;j<std_detail[i].length;j++){

       
        x+= `<td>${std_detail[i][j]}</td>`
    }

     `
</tr>`
    
}
document.querySelector("#tb").innerHTML=x;