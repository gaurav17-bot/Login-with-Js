
document.getElementById("forget-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const pin = document.getElementById("third").value;
    const errormsg = document.getElementById("msg");

    if (pin === "1234") {
        errormsg.textContent = "Password: password123";
        errormsg.style.color = "green";
    } else {
        errormsg.textContent = "Invalid PIN";
        errormsg.style.color = "red";
    }
});