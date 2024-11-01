console.log(firebase)

var email = document.getElementById("email")
var password = document.getElementById("password")
var signin = document.getElementById("signin")

signin.addEventListener("click" , async function(){

    await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user.user.uid)
        localStorage.setItem("userId",user.user.uid)
        window.location.replace("mainPage.html")
    })
    .catch((e)=>{
        localStorage.clear()
        alert(e.message)
    })
})