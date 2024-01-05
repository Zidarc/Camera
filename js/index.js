async function check() {
    const input = document.getElementById("textInput").value;
    const informationBox = document.querySelector(".information");

    if (input.trim() === "88888") {
        informationBox.textContent = "Success!";
        window.location.href = '/success.html';
    } else {
        informationBox.textContent = "Failure!";
    }
}
