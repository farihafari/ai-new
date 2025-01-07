let aurl = window.location.href;
// console.log(aurl)
let getUrl = new URL(aurl);
// console.log(getUrl);
let CatName  = getUrl.searchParams.get("category");
console.log(CatName)
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
    <div class="col-lg-7">
        <div class="card-body">
            <h5 class="card-title">name: ${objects.name}</h5>
            <p class="card-text">category: ${keys}</p>
            <p class="card-text">${objects.description}</p>
            <p class="card-text">PKR: ${objects.price}</p>
            <p class="card-text">Pages: ${objects.pages}</p>
            <p class="card-text">Hosting ${objects.hosting}</p>
            

           
          </div>
    </div>
    
</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
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