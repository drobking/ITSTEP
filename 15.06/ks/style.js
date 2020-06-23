


let clicks=document.querySelectorAll(".showMenuItem");
clicks.forEach((x)=>x.onclick=function() {
	this.querySelector("ul").classList.toggle("display");
})



let lang=document.getElementsByClassName("lang");
lang.onclick=function() {
	
}