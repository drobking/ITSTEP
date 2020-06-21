var a;
const year= 2020;
const p=3.14;
const eur=0.89;
var res
a=prompt("enter your name");
console.log("HI,"+a);

a=prompt("enter your birthday");
console.log(year-a);
a=prompt("enter side squre");
console.log(a*a);
a=prompt("enter r");
console.log(p*(a*a));
a=prompt("enter km");
var b=prompt("enter time");
console.log(a/b);
a=prompt("enter dollar");
console.log(a*eur);
a=prompt("enter gb");
res=(a*1000)/820;
res.toFixed(0);
console.log(res);
a=prompt("enter money");
b=prompt("enter chocklate");
res=a/b;
res.toFixed(0);
console.log(res);
console.log((res*b)-a);
a=prompt("enter num");
while (a) {
    res *= 10;
    res += a % 10;
    a = Math.floor(a / 10);
}
console.log(res);
a=prompt("enter num");
if(a%2==0){
	console.log("чотне")
}
else{
	console.log("!чотне")
}