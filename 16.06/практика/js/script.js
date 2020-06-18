// // document.body.onclick = function(event){
// //     document.querySelector("h1").innerText = U clicked on ${event.target};
// // }

// // document.body.addEventListener("click", function(event){
// // this.querySelector(".red").style.cssText = `left: ${event.clientX}px;
// // top: ${event.clientY}px`
// // })

// // document.querySelector(".blue").addEventListener("mousemove", function(event){
// // this.style.backgroundColor = rgb(${event.clientX}, ${event.pageX}, ${event.pageY});
// // })

// // document.querySelector("h1").addEventListener("mousedown", function(event){
// //     let bg = "";
// //     switch(event.which){
// //         case 1: bg = "purple";
// //         break;
// //         case 2: bg= "olive";
// //         break;
// //         case 3: bg = "orange";
// //         break;
// //     }
// //     this.style.backgroundColor = bg;
// // });

// // // document.querySelector("h1").oncontextmenu = function()
// // // {
// // //     let text = "";
// // //     if(event.ctrlKey)
// // //     text+="ctrl + "
// // // }

// // document.querySelectorAll("input").forEach((x)=>x.onfocus = function(){

// // });
document.getElementById("button").addEventListener("click", checker);
document.getElementById("button").addEventListener("click", validateEmail);
document.getElementById("button").addEventListener("click", NameCheck);
document.getElementById("button").addEventListener("click", SurNameCheck);

function checker(){
    if(document.getElementById("pass1").value != document.getElementById("pass2").value)
    {
        document.getElementById("pass2").style.cssText = "width: 80%; margin-left: 7%; border-color: red;";
        document.getElementById("pass2").value = "";
        document.getElementsByName("password2")[0].placeholder = "wrong password";
    }
}

function validateEmail()
 {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(document.getElementById("email").value)))
    {
        document.getElementById("email").value = "";
        document.getElementById("email").style.cssText = "width: 80%; margin-left: 7%; border-color: red;";
        document.getElementsByName("email")[0].placeholder = "wrong email";
    }
}


function NameCheck(){
    if(document.getElementById("name").value == "")
    {
        document.getElementById("name").style.cssText = "width: 80%; margin-left: 7%; border-color: red;";
        document.getElementsByName("name")[0].placeholder = "Set your name";
    }
}

function SurNameCheck(){
    if(document.getElementById("surname").value == "")
    {
        document.getElementById("surname").style.cssText = "width: 80%; margin-left: 7%; border-color: red;";
        document.getElementsByName("surname")[0].placeholder = "Set your sur name";
    }
}
function CheckGender(){
if(!document.getElementById("female").checked || !document.getElementById("male").checked)
{
    
}

}