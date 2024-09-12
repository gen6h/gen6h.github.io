function toggleMenu() {
  var navList = document.getElementById("nav-list");
  if (navList.style.display === "none" || navList.style.display === "") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "none";
  }
}
$('.portfolio-button').mousedown(function() {
  timeout = setInterval(function() {
    window.scrollBy(0, -1); // May need to be -1 to go down
  }, 0); // Play around with this number. May go too fast

  return false;
});
var navbar = document.getElementById('navbar');

// This event listener is for starting the drag
navbar.addEventListener('dragstart', function(event) {
  // DataTransfer.setData() is used to hold the data that is being dragged.
  event.dataTransfer.setData('text/plain', null);
});
$(document).ready(function(){
  // This code runs when the DOM is fully loaded
  $('#myElement').click(function(){
    alert('Element clicked!');
  });
});
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"></script>



// Typically you would also have dragover and drop event listeners
// to handle the dragging over valid drop targets and the actual drop
// But for a navigation bar, you would need a more complex implementation
// that updates the navbar's position on screen.