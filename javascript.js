//let user_name = prompt("Your name is","");
//alert("hey");
let user_name = document.getElementById("Name");

let confirm_button = document.getElementById("button");

confirm_button.addEventListener("click",disp_name);
//let welcome_message = document.getElementById("welcome_message");

function disp_name(){
    if (user_name.value == "") {
        welcome_message.innerText = "Enter your name"
    }
    else{
        welcome_message.innerText = "Hi, " + user_name.value + "!"
        welcome_message2.innerText = "This is OUR website!"
    }
}

user_name.addEventListener("focus", () => {
    Name.value = ""
})

user_name.addEventListener("keydown",()=>{
    Name.style.color = "black"
})


pass.addEventListener("focus", ()=>{
    pass.value = ""
})

login_button.addEventListener("click", ()=>{
    hint.innerText=""
});

login_button.addEventListener("click", disp_login_result);

function disp_login_result(){
    let input_pass = document.getElementById("pass").value;
    if (user_name.value == "张紫嫣"){
        if (input_pass == 20010805){
            pass_result.innerText = "Finally you came here!"
            window.setTimeout(()=>{
                window.location.href="top4ziyan.html"
            },3000)
        }
        else{
            //alert("Babe, that\'s wrong. Remember THE DATE!")
            alert("wrong password")
        }
    }
    else if(user_name.value == "郭强"){
        if (input_pass == 19981129){
            pass_result.innerText = "Login successed!"
            window.setTimeout(()=>{
                window.location.href="top.html"
            },3000)
    }
        else{
            alert("Wrong! Try again!")
            hint.innerText = "HINT: The most important date."
        }}   
    else{
        warning.innerText = "Get out!"
        alert("Fuck off!")
    }
}
