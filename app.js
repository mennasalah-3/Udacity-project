function myFunction() {
  let x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function highlight(id) {
document.getElementById(id).style.color = "red";
  
}