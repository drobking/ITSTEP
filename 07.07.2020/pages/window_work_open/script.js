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
	url:'details.json',
	type:'GET',
	success:(responce)=>{
		
		for(var i=0;i<responce.length;i++){
		if(responce[i].id==localStorage.getItem('idProduct')){
		document.querySelector(".name").innerText=responce[i].name;
		document.querySelector(".second").innerText=responce[i].name;
		var img=document.createElement("img");
		img.src="img/"+responce[i].icon+".png";
		document.querySelector(".nameImg").append(img);
		for(var j=0;j<responce[i].attachments.length;j++){
			var divition=document.createElement("div");
		var imgAtt=document.createElement("img");
		divition.className="col-3";
		imgAtt.src="img/"+responce[i].attachments[j]+".png";
		divition.append(imgAtt);
		document.querySelector(".attachment").append(divition);
		}
		document.querySelector(".Desc").innerText=responce[i].description;
		document.querySelector(".PriceProd").innerText="$"+responce[i].price;
		document.querySelector(".PriceSideBar").innerText="$"+responce[i].price;
		for(let j=0;j<5;j++){
		if(j<responce[i].rating){
			document.querySelector(".star").innerHTML+='<i class="fas fa-star"></i>';
		}
		else document.querySelector(".star").innerHTML+='<i class="far fa-star"></i>';
		}

		var spanRewiev=document.createElement("span");
		spanRewiev.innerText="("+responce[i].voted+")";
		document.querySelector(".star").append(spanRewiev);
		var spanRewievSidebar=document.createElement("span");
		spanRewievSidebar.innerText=responce[i].view;
		document.querySelector(".RewiewSideBar").append(spanRewievSidebar);
		document.querySelector(".overallNum").innerText=responce[i].rating;
		document.querySelector(".reviewNum").innerText=responce[i].view;
		document.querySelector(".salesNum").innerText=responce[i].sales;
		document.querySelector(".calendarNum").innerText=responce[i].time_deliv;
		document.querySelector(".nameAndSur").innerText=responce[i].author.name;
		document.querySelector(".location").innerText=responce[i].author.location;
		document.querySelector(".languages").innerText=responce[i].author.Lang[0];
		document.querySelector(".biotxt").innerText=responce[i].author.Bio;
		document.querySelector(".face").innerHTML="<a href="+responce[i].author.contacts.fb+"><img class='facebook' src='img/facebook.png' alt=''></a>";
		document.querySelector(".twit").innerHTML="<a href="+responce[i].author.contacts.twitter+"><img class='twitter' src='img/twitter.png' alt=''></a>";
		document.querySelector(".pint").innerHTML="<a href="+responce[i].author.contacts.pinterest+"><img class='pintererst' src='img/pinterest.png' alt=''></a>";
		document.querySelector(".Rewiews").innerText=responce[i].view;
		}
	}
	}
});
}