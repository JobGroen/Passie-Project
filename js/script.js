// Oproepen van navigatie

function openNav() {
    document.getElementById("navigatie").style.display = "block";
    document.getElementById("openbtn").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("navigatie").style.display = "none";
    document.getElementById("openbtn").style.display = "block";
  }


// Functie op nav te sluiten anywhere on screen
var closenav = document.getElementById("navigatie");

closenav.onclick = function () {
    if(event.target == closenav){
        closenav.style.display = "none";
        document.getElementById("openbtn").style.display = "block";
    }
};