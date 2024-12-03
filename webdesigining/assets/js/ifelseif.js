let percentage =parseInt(prompt("enter your percentage to take admission criteria"));
if(percentage>79 && percentage<=100){
    alert("eligible for pre.Med");
}else if(percentage>69 && percentage<=79){
    alert("eligible for pre.Eng");

}
else if(percentage>59 && percentage<=69){
    alert("eligible for Com");

}else{
    alert("not eligible ");

}