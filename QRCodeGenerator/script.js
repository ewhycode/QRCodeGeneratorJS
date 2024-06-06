const qrCode = new QRCode(document.getElementById("qr-code"));
const form = document.getElementById("qr-form");
const input = document.getElementById("input");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = input.value.trim();

    if (userInput === "") {
        errorMessage.innerText = "Please enter a valid input";
        return;
    }

    qrCode.makeCode(userInput);
    errorMessage.innerText = "";
});