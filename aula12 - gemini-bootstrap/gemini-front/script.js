let inputMessagem = document.getElementById("message");
let chatLog = document.getElementById("chat-log");

let messages = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let messageText = inputMessagem.value;
    let mensagemEstruturada = {
        "role" : "user",
        "parts": [{"text": messageText}]
        
    };
    console.log(mensagemEstruturada)

    messages.push(mensagemEstruturada);
    inputMessagem.value = "";

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML = `
        <div class= "message__text">${messageText}</div>
    `;
    chatLog.appendChild(messageElement);

    fetch("http://localhost:5500/sendMessage/", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            messages
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.classList.add("message--assistant");
            messageElement.innerHTML = `
                <div class= "message__text">${data.chat_completion}</div>
            `;
            chatLog.appendChild(messageElement);
        })
});