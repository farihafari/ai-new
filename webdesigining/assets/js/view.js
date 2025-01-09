let data = JSON.parse(localStorage.getItem("products"));
console.log(data);
let x ="";
let total = 0;
let subtotal=0;
for(let values of data){
total = parseInt(values.price) *parseInt(values.quantity);
subtotal+=total;
    // console.log(values.name);
    x+= `
     <tr>
                <th scope="row"><img src="${values.image}" width="90"></th>
                <td>${values.name}</td>
                <td>${values.price}</td>
                <td>${values.quantity}</td>
                  <td>${total}k</td>
              </tr>
    `
}
document.querySelector("#tData").innerHTML=x;
document.querySelector("#subtotal").innerHTML=subtotal;
