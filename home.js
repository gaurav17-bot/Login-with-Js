document.getElementById("home").addEventListener("click", function()
{
    window.location.href="home.html";
}    
);


document.getElementById("log-out").addEventListener("click", function()
{
    window.location.href="new.html";
}    
);



function googleSearch() {
    const query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
      const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
      window.open(url, "_blank");
    }
  }
  

  document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      googleSearch();
    }
  });


  document.getElementById("new").addEventListener("click",function()
{
  window.location.href="newTrend.html";
})
  
