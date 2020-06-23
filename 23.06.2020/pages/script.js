window.onload=()=>{
    let data=localStorage.getItem("users");
    console.log(data);
    
    if (data!=null) {
        users=JSON.parse(data);
    //ID=users.length;
    //printUsers(users);
    let litera=users[0].login.charAt(0);
    console.log(users[0].login.charAt(0));
    document.getElementById("Name").innerHTML="Hello "+users[0].login;
    document.getElementById("cc").innerHTML=litera;
}
}