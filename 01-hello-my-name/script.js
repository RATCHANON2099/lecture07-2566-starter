const greetBtn = document.querySelector("#greet-btn");
console.log(greetBtn);
const nameInput = document.querySelector("#name-input")
const greetMsg = document.querrySeleector("#greet-msg")

greetBtn.onclick = () => {
    if (nameInput.value ===" "){
       greetMsg.innerText = "Please insert your name";
       greetMsg.classList.add("text-danger");

    }else{
        greetMsg.innerText = "Hello" + nameInput.value+"!";
        greetMsg.classList.remove("text-danger");

    }

};