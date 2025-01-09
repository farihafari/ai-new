let aurl = window.location.href;
// console.log(aurl)
let getUrl = new URL(aurl);
// console.log(getUrl);
let CatName  = getUrl.searchParams.get("category");
// console.log(CatName)
$(document).ready(function(){
    let i="";
    let mod ="";
    $.ajax({
        url:"assets/json/project.json",
        type:"get",
        success:function(proData){
            $.each(proData,function(keys,arrays){
  let catObj = keys.split(" ").join("").toLowerCase();
if(catObj==CatName){
   $.each(arrays,function(indexes,objects){
    i+=`<div class="col-lg-3 col-md-6 mt-2">
    <div class="card" >
        <img src="${objects.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title py-2">${objects.name}</h5>
            
            <a href="#a${indexes}" class="btn btn-outline-success" data-bs-toggle="modal" >detail</a>
        </div>
    </div>
</div>`
mod+=`    <!-- Modal -->
<div class="modal fade" id="a${indexes}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${keys} Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
<div class="row justify-content-center">
    <div class="col-lg-3 py-3">
        <img src="${objects.image}" class="img-fluid" alt="">
    </div>
    <div class="col-lg-8">
        <div class="card-body">
            <h5 class="card-title">name: ${objects.name}</h5>
            <p class="card-text">category: ${keys}</p>
            <p class="card-text">${objects.description}</p>
            <p class="card-text">PKR: ${objects.price}</p>
            <p class="card-text">Pages: ${objects.pages}</p>
            <p class="card-text">Hosting ${objects.hosting}</p>
            <div>
    <button class="btn btn-info" onclick="decreament('${indexes}')">-</button>
    <input type="text" id="num${indexes}" value="1">
    <button class="btn btn-info" onclick="increament('${indexes}')">+</button>
    <span id="err${indexes}"></span>
</div>

           
          </div>
    </div>
    
</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="AddToCart('${catObj+indexes}')">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>`
   });
   $("#product").html(i);
   $("#modd").html(mod);

//  console.log(arrays.name)
}
               
            })
        
            // console.log(proData);
        }
    })

})
// increament
let count =1; 
function increament(id){
  // console.log(id)
count++;
$("#num"+id).val(count)
$("#err"+id).html("");
}

function decreament(id){
  if(count>1){
    count--;
    $("#num"+id).val(count);
   
  }
  else{
    $("#num"+id).val(count)
$("#err"+id).html(" at least one product should be add into cart").css({
  "display":"block",
  "margin-top":"3px",
  "color":"red",
  "font-weight":"bold"
});

  }
  // console.log(id)

}
// add to cart
function AddToCart(addId){
// console.log(addId);

$.ajax({
  url:"assets/json/project.json",
  type:"get",
  success:function(addData){
      $.each(addData,function(addkeys,addarrays){
let addObj = addkeys.split(" ").join("").toLowerCase();
$.each(addarrays,function(addindex,addobjects){
  if(addObj+addindex == addId){
    let qty = document.querySelector("#num"+addindex).value;
console.log(qty);
// console.log(addObj+addindex);
let stdata = localStorage.getItem("products");
// console.log(JSON.parse(stdata))
// console.log([]);
if(stdata == null){
  localStorage.setItem("products","[]");
} 
let oldData = JSON.parse(stdata);
let addproducts ={
  name:addobjects.name,
  price:addobjects.price,
  hosting:addobjects.hosting,
  image:addobjects.image,
  quantity:qty

}
 oldData.push(addproducts);
 localStorage.setItem("products",JSON.stringify(oldData));
 alert("data add into cart");
 location.assign("project.html");   
  }
})
})

      }
    })
}
// localStorage.clear();