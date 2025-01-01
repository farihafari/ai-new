function Sum(a,b){
let n1 =parseInt( document.querySelector("#n1").value);
let n2 = parseInt(document.querySelector("#n2").value);
a=n1;
b=n2;
let c= a+b;
document.querySelector("#print").innerHTML=c;
// if(a && b){
//     return a+b;
// }
// return 0;

}

function param(a){

    console.log(a)
}
// // console.log(Sum(2,5));
// // console.log(Sum(5,5));
// // console.log(Sum(7,5));
// console.log(Sum());
