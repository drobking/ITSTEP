let person={
	name: "Ira",
	surName:"Mertsalova",
	gender:"female"
	SetAge(age){
	 this.age=age;
	}
};
person.age=15;
console.log(person);
document.body.innerHTML=`<p>${person.name} ${person.surName} - ${person["gender"]}</p>`;

