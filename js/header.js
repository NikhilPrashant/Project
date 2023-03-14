// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");

// Get the <em> element that closes the modal
var em = document.getElementsByClassName("closeModal1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <em> (x), close the modal
em.onclick = function() {
  modal1.style.display = "none";
}


// When the user clicks on Sign Up link, open Sign Up modal and close Sign In modal
function myFunction() {
  modal1.style.display = "block";
  modal.style.display =  "none";
  em.onclick = function() {
    modal1.style.display = "none"
  }
}