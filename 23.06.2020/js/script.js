function general() {
	location.href="pages/index.html";

    let users =[{login: "EGOR", password: "1234" } ];
    let user = {
      
        login: document.getElementById("i1").value,
        password: document.getElementById("i2").value,
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}
