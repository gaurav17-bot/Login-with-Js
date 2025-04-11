document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");
  
    
    if (username === "admin" && password === "password123") {
      window.location.href = "home.html";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });



  document.getElementById("clickMe").addEventListener("click", function() {
    window.location.href = "forget.html"; 
  });
  
 document.getElementById("sign-in").addEventListener("click", function()
{
    window.location.href="singIn.html";
})


  