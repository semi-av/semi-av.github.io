let modal = document.getElementById("modal-area");
let btn = document.getElementById("modal-btn");
let btnClose = document.getElementById("modal-close");

btn.onclick = function() {
  modal.style.display = "flex";
}

btnClose.onclick = function() {
  document.getElementById("modal-area").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}