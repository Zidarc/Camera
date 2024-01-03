async function check() {
    const input = document.getElementById("textInput").value;
    const informationBox = document.querySelector(".information");

    if (input.trim() === "I am foolish") {
        informationBox.textContent = "Success!";
        window.location.href = '/success.html';
    } else {
        informationBox.textContent = "Failure!";
    }
}
