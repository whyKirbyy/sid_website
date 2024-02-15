function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var pageContainer = document.getElementById("page-container");
    sidebar.classList.toggle("sidebar-expanded");
    pageContainer.classList.toggle("sidebar-expanded");
    document.body.classList.toggle("sidebar-expanded"); // Apply the class to the body
}

document.addEventListener('keydown', function(event) {
  // Check if 'M' is pressed along with the 'Meta' key (Cmd on Mac) or 'Ctrl' key (Ctrl on Windows)
  if ((event.metaKey || event.ctrlKey) && event.key === 'm') {
      toggleSidebar(); // Call your existing toggleSidebar function
  }
  // Check if the key pressed is 'Escape'
  if (event.key === 'Escape' && sidebar.classList.contains('sidebar-expanded')) {
      toggleSidebar(); // Call your existing toggleSidebar function
  }
});


// Event listener for clicking outside the sidebar
document.getElementById('page-container').addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    // Check if sidebar is currently expanded
    if (sidebar.classList.contains('sidebar-expanded')) {
        toggleSidebar(); // Call your existing toggleSidebar function
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Initialize sections
    var sections = document.querySelectorAll('.section .content');
    sections.forEach(function(content) {
        content.style.display = 'none';
    });

    var infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(function(box) {
      box.addEventListener('click', function() {
        window.location.href = this.querySelector('a').href;
      });
    });
});





