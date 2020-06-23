document.querySelector("header").previousElementSibling.classList.add("unshow");
	window.onscroll=()=>{

	let header =document.querySelector("header");
	let heightHeader=header.offsetHeight;
	console.log(heightHeader)
	if(window.pageYOffset>heightHeader)
		header.nextElementSibling.classList.add("fixed");
	else{
		header.nextElementSibling.classList.remove("fixed");
	}
	let heightWin=document.body.offsetHeight;
	console.log(window.pageYOffset)
	if(window.pageYOffset>(document.body.scrollHeight/2)){
		header.previousElementSibling.classList.remove("unshow");
	}
	else{
		header.previousElementSibling.classList.add("unshow");
	}
}
function goUP() {
	window.scrollTo(0,0);
	console.log("asfdfgrg")
}