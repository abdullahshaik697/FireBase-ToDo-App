var input = document.getElementById("input-field")
var text = document.getElementById("text")

function Add() {
    if (input.value == "") {
        alert('please enter task')
    }
    else {
        var newEleB = document.createElement("b")
        var newEle = document.createElement("li")
        var deleteButton = document.createElement("button")
        var editButton = document.createElement("button")


        deleteButton.innerHTML = "DELETE"
        deleteButton.style = "color:white;border:none;border-radius:5px;font-weight:500; background-color:red; padding: 10px;";
                            

        newEleB.innerHTML = input.value;
        input.value = "";

        newEle.style = "margin:10px"
        newEle.appendChild(newEleB);
        newEle.appendChild(deleteButton);
        text.appendChild(newEle);
        deleteButton.addEventListener("click", function(){
            newEle.remove();
        })

    }
}


var username = document.getElementById("name")
var email = document.getElementById("email")

window.onload = function () {
    var userId = localStorage.getItem("userId")
    if (userId) {
       getUserData()
    }
    else{
        window.location.href="index.html"
    }
}


async function getUserData(){
    var userId = localStorage.getItem("userId")
    await firebase.database().ref("users").child(userId).get().then((snap)=>{
        console.log(snap.val().email)
        console.log(snap.val().uname)
        email.innerText = snap.val().email
        username.innerText = snap.val().uname

    })
    .catch((e)=>{
        console.log(e)
    })
}