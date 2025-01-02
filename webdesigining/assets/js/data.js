$(document).ready(function(){
    $.ajax({
        url:"assets/json/data.json",
        type:"get",
        success:function(data1){
// console.log(data.hosting);
let i ="";
// $.each(data1,function(a,b){
// // console.log(b)
// i+=` <li>${a+" "+b.name}</li>
//  <li>${a+" "+b.price}</li>
//   <li>${a+" "+b.hosting}</li>
//   <li><img  src="${b.image}" width="90"></li>

// `;
// })
// $("#x").html(i);
// categories
$.each(data1,function(indexes,objects){
    i+=`<div class="col-lg-3 col-md-6 mt-2">
                <div class="card" >
                    <img src="${objects.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title py-2">${objects.name}</h5>
                        
                        <a href="" class="btn btn-outline-success">More</a>
                    </div>
                </div>
            </div>`
})
$("#catgeory").html(i);
        }
    })
})