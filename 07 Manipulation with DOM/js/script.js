// window.onload = Init;

// function Init(){
//     let container = document.querySelector(".container");
//    setTimeout(()=>{container.classList.add("shadow");
//     container.querySelector(".spinner").classList.add("spinner-load");
// }, 1000);
//     setTimeout(()=>{
//         console.log(container.children);
//         container.children[0].classList.remove("spinner-load");
//         container.className = "";
//     }, 6000);
//     setInterval(blinkElement, 4000);
// }

// function blinkElement(){
//     let h1 = document.querySelector("h1");
//     h1.hidden = !h1.hidden;
// }
let ID = 1;
document.querySelector("input[type='button']").onclick = getData;
let users = [{
    ID: "ID",
    Name: "Name",
    Email: "Email",
    Tel: "Tel",
    Message: "Message"
}];

function getData() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let tel = document.querySelector("input[type='tel']").value;
    let msg = document.querySelector("textarea").value;

    const user = {
        Id: ID++,
        Name: name,
        Email: email,
        Tel: tel,
        Message: msg
    };

    users.push(user);
    printUsers(users);
}
let table;
table = document.createElement("table");

function printUsers(data) {
    if (!document.body.contains(table)) {
        document.body.append(table);
    }
    table = document.querySelector("table");
    while (table.children.length > 0) {
        table.children[0].remove();
    }
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        for (let item in users[i]) {
            let td = document.createElement("td");
            td.innerText = users[i][item];
            tr.append(td);
        }
        table.append(tr); // додати вузол в кінець ноди нода.append(new_node))
        // node.prepend(newNode) - додати на початок ноди
        // нода.before(newNode) - додати нову перед існуючою нодою
        // нода.after(newNode) - додати після існуючої ноди
        // нода.replaceWith(newNode) - замінити стару ноду на нову
        // нода.cloneNode(true\false)
                    // true - deep copy
                    // false - shallow copy
        // table.appendChild(tr);
    }

}

let num = document.querySelector("input[type='number']");
num.onkeydown = (e)=>{
  //  this.disabled = true;
e.preventDefault();
}