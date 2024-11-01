console.log(firebase);

var username = document.getElementById("name")
var age = document.getElementById("age")
var email = document.getElementById("email")
var password = document.getElementById("password")

var signIn = document.getElementById("signin")
var signup = document.getElementById("signup")

signup.addEventListener("click",async function(){
    await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then(async (user)=>{
        
        var userObject = {
            userId : user.user.uid,
            email:email.value,
            password:password.value,
            uname:username.value,
            age:age.value
          }

    await firebase.database().ref("users").child(user.user.uid).set(userObject) 
          alert("User's Record Saved in Database...")
         window.location.href="loginPage.html"
    })
    .catch((e)=>{
        alert(e.message)
    })
})