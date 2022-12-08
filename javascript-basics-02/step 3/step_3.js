var div = document.createElement('div');
div.setAttribute ('id','mydiv');
document.body.appendChild(div);
var Name=document.getElementById('name')
Name.onchange=function(){
    div.innerHTML=Name.value;
}
