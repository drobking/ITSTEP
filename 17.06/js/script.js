function addBlock() {
	console.log("sdfs");
var a=document.querySelector(".blocks");
let block=document.createElement('div');
block.onclick=function() {
	document.querySelector(".text").style.color=block.dataset.color;
	this.remove();
}
block.className="bl";
block.style.backgroundColor='rgb('+getRandomArbitrary(0,255)+','+getRandomArbitrary(0,255)+','+getRandomArbitrary(0,255)+')';
block.style.width='50px';
block.style.height='50px';
block.style.margin='3px';
block.setAttribute("data-color",block.style.backgroundColor);
a.append(block);

}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function addComment() {
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

	let textBlock=document.createElement('p');
	
	
	
	textBlock.innerText+=document.querySelector('input[type="text"]').value+'\t';
	textBlock.innerText+=document.querySelector('input[type="textarea"]').value+'\t';
	textBlock.innerText+=day + "/" + month + "/" + year+'\t';
	document.body.append(textBlock);
}
function SupressInput($event)
{
  $event.preventDefault();
}