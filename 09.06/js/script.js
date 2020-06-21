let a;
let b;
let c;
let res;
a=prompt("hours");
b=prompt("min");
c=prompt("sec");
if(a>0&&a<24){
	console.log("good");
}
else{
	console.log("bad");
}


a=+prompt("x");
b=+prompt("y");
if(b>0&&a<0){
	console.log("I");
}
else if(b>0&&a>0){
	console.log("II");
}
else if(b<0&&a<0){
	console.log("III");
}
else{
	console.log("IV");
}

a=0;
res=0;
b=+prompt("1 enter number");
while(a<b){
	res+='#';
	a++;
}
console.log(res);


a=0;
b=+prompt("2 enter number");
while(a<=b){
console.log(b);
b--;
}




//


 a = +prompt("Enter number");
 let result = 1;
 for (i = 1; i <= a; i++) 
 {
     result = result * i;
 }
 console.log(result);

let num;
num=+prompt("Enter number");
for(var i = 2; i < num; i++){
    if(num % i == 0){
console.log("no");
    }
}
console.log("yes");




let fruits=['apple','pineapple','banana','kiwi','watermalou'];
fruits.sort();
fruits.reverse();
for (var i = fruits.length - 1; i >= 0; i--) {
	console.log(fruits[i]);
}