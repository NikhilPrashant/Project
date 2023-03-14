// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the icons that opens the modal
var trash = document.getElementById("icontrash");
var trash1 = document.getElementById("icontrash1");
var trash2 = document.getElementById("icontrash2");
var trash3 = document.getElementById("icontrash3");
var trash4 = document.getElementById("icontrash4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal3")[0];

// When the user clicks the icons, open the modal
trash.onclick = function() {
  modal3.style.display = "block";
}
trash1.onclick = function() {
  modal3.style.display = "block";
}
trash2.onclick = function() {
  modal3.style.display = "block";
}
trash3.onclick = function() {
  modal3.style.display = "block";
}
trash4.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}