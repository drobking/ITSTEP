document.body.onclick=function(event) {
document.querySelector("h1").innerText = `U clicked on ${event.target}`;
}
document.querySelector(".red").addEventListener("mousemove",function(event) {
	this.style.backgroundColor=`rgb(${event.clientX}, ${event.pageX}, ${event.pageY})`;
})


document.querySelector("h1").addEventListener("mousedown", function(e) {
	let bg="";
	switch(e.which){
		case 1:
		bg="purple";
		break;
		case 2:
		bg="olive";
		break;
		default:
		bg="orange";
		break;
	}
	this.style.backgroundColor=bg;
})

document.querySelector("h1").oncontextmenu=function() {
	return false;
}
document.body.onkeydown=function(e) {
	let text = "";
	if(e.ctrlKey)
	text+="ctrl +";
	 if(e.altKey)
	text+="alt + ";
	 if(e.shiftKey)
	text+="shift + ";
text+=e.key;

document.querySelector("h1").innerText=text;
	
}




