function createRecept(){
	let fullRecipe={
		name:document.getElementById("ricept").value,
		ingr:document.getElementById("ingridients").value,
		time:document.getElementById("timeC").value,
	};
	
	let sell=document.getElementById("select");
	sell.style.display="none";
	document.body.innerHTML="<p>Hello tuday we cooked "+ricept.value+"</p>"
	document.body.innerHTML+=""
}