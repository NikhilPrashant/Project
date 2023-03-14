// Get the modal
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal

var btn2 = document.getElementById("myBtn2");

// Get the <pre> element that closes the modal
var pre = document.getElementsByClassName("closeModal2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <pre> (x), close the modal
pre.onclick = function() {
  modal2.style.display = "none";
}