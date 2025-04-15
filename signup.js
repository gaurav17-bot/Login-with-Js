document.getElementById("loginForm").addEventListener("submit", function(e)
{
    e.preventDefault();

    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const password2=document.getElementById("password2").value;
    const msg=document.getElementById("msg");

    if(username.trim() !== "" && email.trim() !== "" && password.trim() !== "" && password2.trim() !== "")
    {

        if(password===password2)
        {
            window.location.href="home.html";
        }
        else{
            msg.textContent="Rewrite password!"
        }
    }
       
    else{
        msg.textContent="Fill up all the boxes!"       
    }
   
})

