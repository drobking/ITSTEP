
 window.onload=function() {
 		var arrayProd=[];
$.ajax({
	url:'../../categories.json',
	type:'GET',
	success:(responce)=>{
		var arrayCat=[];
console.log(responce);
var menuCol=document.createElement("div");
 			menuCol.className="col-6";
 		for (var i=0;i<responce.data.length;i++) {
 			arrayCat.push(responce.data[i]);

 			let cate=document.createElement("div");
 			cate.className="col-12";
 			let btn=document.createElement("span");
 			btn.setAttribute("data-ID",responce.data[i].id);

 			btn.className="categoriesBtn";
 			btn.addEventListener("click",showCat);
 			btn.innerText=responce.data[i].name;
 			cate.append(btn);
 			document.querySelector(".appendCate").append(cate);	
 			if(i==0){
 				continue;
 			}
 			if(i%6==0){
 				document.querySelector(".dropdown-menu").append(menuCol);
 			var menuCol=document.createElement("div");
 			menuCol.className="col-6";
 			document.querySelector(".dropdown-menu").append(menuCol);
 		}
 		
		let menu=document.createElement("a");
 			menu.className="dropdown-item";
 			menu.innerText=responce.data[i].name;
 			menuCol.append(menu);
 		

 		}
	}
});

 $.ajax({
 	url:'../../products.json',
 	type:'GET',
 	success:(responce)=>{
 		console.log(responce);
 	 

 		for (var i=0;i<responce.data.length;i++) {
 			
 			arrayProd.push(responce.data[i]);
 			loadOneProd(arrayProd[i]);
  	}
  	console.log(arrayProd);
  	

 	}
 });
function loadOneProd(responce) {
	let Rectangle = document.createElement("div");
 			 
 		
	let Block = document.createElement("div");
	Block.className="col-12 col-md-6 col-lg-4";
 	Rectangle.className ="Rectangle";
 	Rectangle.addEventListener("click",showDetails);
 	Rectangle.setAttribute("data-idprod",responce.id);

 	let image = document.createElement("img");
  	image.src="../../img/"+responce.icon+".png";
  	Rectangle.append(image)
  	Block.append(Rectangle);
  	document.querySelector(".prod").append(Block);
  	let name=document.createElement("div");
  	name.className="nameWorks"
  	name.innerText=responce.name;

  	Rectangle.append(name);
  	let hr=document.createElement("hr");
  	hr.className="hrWorks";

  	Rectangle.append(hr);
  	let author=document.createElement("div");
  	author.className="authorWorks";
  	author.innerText=responce.author;
  
  	Rectangle.append(author);
  	let viewAndPrice=document.createElement("div");
  	viewAndPrice.className="viewAndPrice";
 
 	let view=document.createElement("div");
 	view.innerHTML='<i class="fas fa-eye"></i> '+responce.view;
 	
 	Rectangle.append(viewAndPrice);
 	viewAndPrice.append(view);
	let price=document.createElement("div");
	price.innerHTML="<b>$"+"</b>"+responce.price;
	viewAndPrice.append(price);
	let rate=document.createElement("div");
	rate.className="rateWorks";

	for(let j=0;j<5;j++){
		if(j<responce.rating){
			rate.innerHTML+='<i class="fas fa-star"></i>';
		}
		else rate.innerHTML+='<i class="far fa-star"></i>';
	}
	let rate_voted_save=document.createElement("div");
	rate_voted_save.className="rate_voted_saveWorks";
	
	rate_voted_save.append(rate);
	let vote=document.createElement("div");
	vote.className="voteWorks";
	
	vote.innerHTML='<span>('+responce.voted+')</span><i class="fas fa-save"></i>';
	
	rate_voted_save.append(vote);
	Rectangle.append(rate_voted_save);
}
function showDetails(event) {
   

	localStorage.setItem("idProduct",event.path[1].getAttribute("data-idProd"))
	window.open("../window_work_open/index.html");

	
}
function showCat(event) {
	let ID=event.target.getAttribute('data-ID');
console.log(ID);


switch (+ID) {
	case 1:
	
$(".prod").empty();
	for (let i=0;i<arrayProd.length;i++) {
		
 			loadOneProd(arrayProd[i]);
 			
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	case 2:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==2){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;

  	case 3:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==3){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;

  	 	case 4:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==4){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	 	case 5:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==5){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	 	case 6:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==6){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	 	case 7:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==7){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	 	case 8:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==8){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	 	case 9:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==9){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;
  	 	case 10:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==10){
			loadOneProd(arrayProd[i]);
			flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  		img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img)
  	}
  	break;
  	 	case 11:
  	$(".prod").empty();
  	var flag=false;
  	for (let i=0;i<arrayProd.length;i++) {
 			if(arrayProd[i].categoryId==11){
		loadOneProd(arrayProd[i]);
		flag=true;
 			}
  	}
  	if(flag==false){
  		let img=document.createElement("img");
  			img.className="notFound";
  			img.src="img/Group 5.png";
  		document.querySelector(".prod").append(img);
  	}
  	break;

}
}

}

