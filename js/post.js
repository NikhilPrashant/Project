// Toggle between Save and Edit buttons
function myFunction1(button) {
  var a = document.getElementById("blogTitleNew");
  var b = document.getElementById("blogBody");
  //  When the user clicks Save button, make post uneditable and remove borders and change button to Edit
  if (a.contentEditable == "true") {
    a.contentEditable = "false";
    b.contentEditable = "false";
    a.style.border = "none";
    b.style.border = "none";
    button.innerHTML = "Edit";
  }
  // When the user clicks Edit button, make post editable and put it inside border  and change button to Save
  else {
    a.contentEditable = "true";
    b.contentEditable = "true";
    a.style.border = "1px solid #ff4d6a";
    b.style.border = "1px solid #ff4d6a";
    button.innerHTML = "Save";
  }
}

// When the user clicks Like button, increase likes and change text
var value = 0;
var c = document.getElementById("like");
function myFunction2(button) {
  var newValue = value + 1;
  value = newValue
  button.innerHTML = "Liked";
  if(value ===1) {
    c.innerHTML = newValue + " person likes this!";
  }
  if(value>1) {
    c.innerHTML = newValue + " people have liked this!";
  }
}

// When the user writes commment clicks Comment button, post it on top of other comments
function getWords() {
  text = words.value;
  if(text === '') {
    // When the user clicks Comment button without writing comment, alert the user
    window.alert("Empty comment can't be posted, please write something in comments.")
  }
  else{
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = text;
    document.getElementById("words").value = "";
  }
}
