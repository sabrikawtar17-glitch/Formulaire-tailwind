let btn = document.getElementById("btn")


btn.addEventListener('click',function login(e){
    e.preventDefault()


const correctemail = "sabrikawtar17@gmail.com"
const correctpassword = "1234"
const message = document.getElementById("message")


let mail = document.getElementById("email").value;
 console.log(mail)
let word = document.getElementById("password").value;
console.log(word)

if( mail == correctemail && word == correctpassword){
    console.log("true")
    message.innerHTML = "this is correct"
    message.style.color = "green"

}
else{
    console.log("false")
     message.innerHTML = "this is incorrect"
    message.style.color = "red"

}
 })

