
 window.onload=function() {

 	 $.ajax({
 	url:'products.json',
 	type:'GET',
 	success:(responce)=>{
 		console.log(responce);
 		document.querySelector("#proWorks").innerText=responce.data.length;
 		for (var i=0;i<responce.data.length;i++) {
 			let Rectangle = document.createElement("div");
	let Block = document.createElement("div");
	Block.className="col-6 col-md-3 col-lg-2";
 	Rectangle.className ="Rectangle";
 	
 	
 	let image = document.createElement("img");
  	image.src="../img/"+responce.data[i].icon+".png";
  	Rectangle.append(image)
  	Block.append(Rectangle);
  	document.querySelector(".prod").append(Block);
  	let name=document.createElement("div");
  	name.className="nameWorks"
  	name.innerText=responce.data[i].name;
  
  	Rectangle.append(name);
  	let hr=document.createElement("hr");
  	hr.className="hrWorks";

  	Rectangle.append(hr);
  	let author=document.createElement("div");
  	author.className="authorWorks";
  	author.innerText=responce.data[i].author;
  
  	Rectangle.append(author);
  	let viewAndPrice=document.createElement("div");
  	viewAndPrice.className="viewAndPrice";
 
 	let view=document.createElement("div");
 	view.innerHTML='<i class="fas fa-eye"></i> '+responce.data[i].view;
 	
 	Rectangle.append(viewAndPrice);
 	viewAndPrice.append(view);
	let price=document.createElement("div");
	price.innerHTML="<b>$"+"</b>"+responce.data[i].price;
	viewAndPrice.append(price);
	let rate=document.createElement("div");
	rate.className="rateWorks";

	for(let j=0;j<5;j++){
		if(j<responce.data[i].rating){
			rate.innerHTML+='<i class="fas fa-star"></i>';
		}
		else rate.innerHTML+='<i class="far fa-star"></i>';
	}
	let rate_voted_save=document.createElement("div");
	rate_voted_save.className="rate_voted_saveWorks";
	
	rate_voted_save.append(rate);
	let vote=document.createElement("div");
	vote.className="voteWorks";
	
	vote.innerHTML='<span>('+responce.data[i].voted+')</span><i class="fas fa-save"></i>';
	
	rate_voted_save.append(vote);
	Rectangle.append(rate_voted_save);
  	}
 	}
 });
$.ajax({
	url:'categories.json',
	type:'GET',
	success:(responce)=>{
console.log(responce);
var menuCol=document.createElement("div");
 			menuCol.className="col-6";
 		for (var i=1;i<responce.data.length;i++) {
 			let cate=document.createElement("div");
 			cate.className="col-2";
 			let btn=document.createElement("button");
 			btn.className="categoriesBtn";
 			btn.innerText=responce.data[i].name;
 			cate.append(btn);
 			document.querySelector(".appendCate").append(cate);	
 			
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

 }
 function showWorks() {
window.open('../pages/window_works/index.html');
 }




