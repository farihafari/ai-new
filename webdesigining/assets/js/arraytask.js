let stdName =[
    'ali','abdul hu1','asad','haider','zohaib','asad','abdul basit','owais','yusha','mansoor','afifa','hala','rija','yumna'
]
let x ='';
let count=1;
for(let i=0;i<stdName.length;i++){
x+=`
<li>
${count+i}&nbsp;
${stdName[i]}
</li> `
}
document.getElementById("data").innerHTML=x