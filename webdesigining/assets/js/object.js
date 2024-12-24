let product =[
    {
    name :"real me",
    price:24000,
    description:"Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.",
    image:"assets/images/img1.jpg"


},{
    name :"real me",
    price:24000,
    description:"Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.",
    image:"assets/images/img1.jpg"
}]
// let x = document.getElementById('x').innerHTML;
// document.write(data.name+" "+data.age);
for(let key in product){
    document.write("<img src='"+product[key].image+"'><br>");
}
