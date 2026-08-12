const button = document.querySelector("#changeButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
    message.textContent = "Your JavaScript is working!";
});
