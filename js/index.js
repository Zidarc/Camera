async function check() {
    const input = document.getElementById("textInput").value;
        if (input.trim() === "I am foolish") {
            document.getElementById("information").innerText = "success";
            window.location.href = '/success.html';
        } else {
            informationBox.textContent = "Failure!";
            document.getElementById("information").innerText = "failure";
        }
}
