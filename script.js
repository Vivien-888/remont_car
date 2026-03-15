function sendForm(){

let name = document.getElementById("name").value
let phone = document.getElementById("phone").value

if(name === "" || phone === ""){
alert("Пожалуйста заполните поля")
return
}

alert("Спасибо! Мастер Дамир скоро вам перезвонит.")

}